
import React, { useState } from "react";
import { DateRange, defaultStaticRanges } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import "./LocationDateTimePicker.scss";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

import { CssButtonOutline, CssButtonSolid } from "../CssButton";
import { Divider, InputLabel, MenuItem, Modal, Select, useMediaQuery, useTheme } from "@mui/material";
import { useEffect } from "react";

import SearchPageHeading from "../SearchPageHeading";
import { getLatLong, getLocations } from "@/app/SearchPage/utils/utils";
import { useRouter } from "next/navigation";

import { setCookie, getCookie } from "cookies-next";

function useResponsiveValue(values) {
    
  const theme = useTheme();
  


  // MUI breakpoints order: xs < sm < md < lg < xl
  const matches = {
    xl: useMediaQuery(theme.breakpoints.up("xl")),
    lg: useMediaQuery(theme.breakpoints.up("lg")),
    md: useMediaQuery(theme.breakpoints.up("md")),
    sm: useMediaQuery(theme.breakpoints.up("sm")),
    xs: true, // default fallback
  };

  if (matches.xl && values.xl !== undefined) return values.xl;
  if (matches.lg && values.lg !== undefined) return values.lg;
  if (matches.md && values.md !== undefined) return values.md;
  if (matches.sm && values.sm !== undefined) return values.sm;
  return values.xs;
}

const SLIDER_MARKS = {
  0: "12:00 AM",
  1: "1:00 AM",
  2: "2:00 AM",
  3: "3:00 AM",
  4: "4:00 AM",
  5: "5:00 AM",
  6: "6:00 AM",
  7: "7:00 AM",
  8: "8:00 AM",
  9: "9:00 AM",
  10: "10:00 AM",
  11: "11:00 AM",
  12: "12:00 PM",
  13: "1:00 PM",
  14: "2:00 PM",
  15: "3:00 PM",
  16: "4:00 PM",
  17: "5:00 PM",
  18: "6:00 PM",
  19: "7:00 PM",
  20: "8:00 PM",
  21: "9:00 PM",
  22: "10:00 PM",
  23: "11:00 PM",
};

const BUFFER_TIME = 3;
const MIN_RENTAL_TIME = 8;

const LocationDateTimePicker = ({ actionHandler }) => {
  const router = useRouter();

  const [isMobile, setIsMobile] = useState(false);

  const [showPicker, setShowPicker] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [tempStartTime, setTempStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [tempEndTime, setTempEndTime] = useState(null);

  const monthsToShow = useResponsiveValue({ xs: 1,sm:1, md: 2, lg: 3 });

  const getValidDate = (d, type) => {
    if (type == "start") {
      if (d.getHours() + BUFFER_TIME >= 22) {
        return new Date(d.setDate(d.getDate() + 1));
      } else {
        return d;
      }
    } else {
      if (d.getHours() + BUFFER_TIME + MIN_RENTAL_TIME >= 22) {
        return new Date(d.setDate(d.getDate() + 1));
      } else {
        return d;
      }
    }
  };

  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [tempDateRange, setTempDateRange] = useState(null);

  const handleDateRangeSelect = (ranges) => {
    if (
      startTime > endTime &&
      ranges.selection.startDate.getDate() == ranges.selection.endDate.getDate()
    ) {
      var d = ranges.selection.endDate;
      ranges.selection.endDate = new Date(d.setDate(d.getDate() + 1));
    }
    setTempDateRange([ranges.selection]);
  };

  const handleDateOpen = () => {
    setShowPicker(true);
  };

  const handleDateClose = () => {
    if (tempDateRange && tempDateRange.length > 0) setDateRange(tempDateRange);
    if (tempStartTime) setStartTime(tempStartTime);
    if (tempEndTime) setEndTime(tempEndTime);
    setTempDateRange(null);
    setTempStartTime(null);
    setTempEndTime(null);
    setShowPicker(false);
  };

  const handleDateCancel = () => {
    setTempDateRange(null);
    setTempStartTime(null);
    setTempEndTime(null);
    setShowPicker(false);
  };

  const getTimefromSlider = (index) => {
    return SLIDER_MARKS[index];
  };

  // const formatDate = (date, type) => {
  //   var timestamp = null;
  //   if (type === "start") {
  //     timestamp = getTimefromSlider(startTime);
  //   } else {
  //     timestamp = getTimefromSlider(endTime);
  //   }

  //   return (
  //     new Date(date).toLocaleDateString("en-US", {
  //       month: "short",
  //       day: "numeric",
  //       year: "numeric",
  //     }) +
  //     ", " +
  //     timestamp
  //   );
  // };

  const formatDate = (date, type) => {
    let timestamp = type === "start"
      ? getTimefromSlider(startTime)
      : getTimefromSlider(endTime);
  
    // Fallback if timestamp is undefined
    if (!timestamp) timestamp = "00:00 am";
  
    return (
      new Date(date).toLocaleString("en-GB", {
        day: "2-digit",
        month: "short",
      }) +
      " " +
      timestamp.toLowerCase()
    );
  };
  
  

  const handleSliderChange = (value, type) => {
    var dateRangeHolder = null;
    if (tempDateRange) {
      dateRangeHolder = tempDateRange;
    } else {
      dateRangeHolder = dateRange;
    }
    if (type == "start") {
      if (
        new Date(dateRangeHolder[0].startDate).getDate() ===
          new Date().getDate() &&
        value < new Date().getHours() + BUFFER_TIME
      ) {
        setTempStartTime(new Date().getHours() + BUFFER_TIME);
      } else {
        setTempStartTime(value);
      }

      if (
        new Date(dateRangeHolder[0].startDate).getDate() ===
          new Date(dateRangeHolder[0].endDate).getDate() &&
        value - endTime < MIN_RENTAL_TIME
      ) {
        if (value + MIN_RENTAL_TIME > 21) {
          setTempDateRange([
            {
              startDate: getValidDate(new Date(), "start"),
              endDate: getValidDate(new Date(), "end"),
              key: "selection",
            },
          ]);
        }
        setTempEndTime(value + MIN_RENTAL_TIME);
      } else if (21 - value + endTime < MIN_RENTAL_TIME) {
        setTempEndTime(value - 16);
      }
    } else {
      if (
        dateRangeHolder[0].startDate === dateRangeHolder[0].endDate &&
        startTime - value < MIN_RENTAL_TIME
      ) {
        if (value - MIN_RENTAL_TIME > 0)
          setTempStartTime(value - MIN_RENTAL_TIME);
      }
      setTempEndTime(value);
    }
  };

  const handleSliderTooltip = (value) => {
    return `${value}:00`;
  };

  const getSlideMarks = (type) => {
    const marks = {};
    if (type == "start") {
      if (tempStartTime) {
        marks[tempStartTime] = SLIDER_MARKS[tempStartTime];
      } else {
        marks[startTime] = SLIDER_MARKS[startTime];
      }
    } else {
      if (tempEndTime) {
        marks[tempEndTime] = SLIDER_MARKS[tempEndTime];
      } else {
        marks[endTime] = SLIDER_MARKS[endTime];
      }
    }
    return marks;
  };

  const getMaxDate = () => {
    var d = new Date();
    return new Date(d.setMonth(d.getMonth() + 2));
  };

  const getMinDate = () => {
    var d = new Date();
    if (d.getHours() + BUFFER_TIME >= 24) {
      return new Date(d.setDate(d.getDate() + 1));
    }
    return new Date();
  };

  // Location related notice point
  const [showLocationPicker, setShowLocationPicker] = useState(false);

  const handleLocationOpen = () => {
    setShowLocationPicker(true);
  };

  const handleLocationClose = () => {
    setArea(temparea);
    setTempArea(null);
    setShowLocationPicker(false);
  };

  const handleLocationCancel = () => {
    setTempArea(null);
    setShowLocationPicker(false);
  };

  const [city, setCity] = useState(null);
  const [area, setArea] = useState(null);
  const [temparea, setTempArea] = useState(null);

  const CitiesList = ["Hyderabad", "Bangalore", "Chennai"];
  const AreasList = getLocations();

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleAreaChange = (event) => {
    setTempArea(event.target.value);
  };

  // const handleGetCar = () => {
  //   if (area === "Please select Area") {
  //     toast.info("Please select valid location", {
  //       position: "bottom-left",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       draggable: true,
  //       theme: "light",
  //     });
  //     return;
  //   }

  //   const [latittude, longitude] = getLatLong(area);
  //   var fetchCardParamsObj = {
  //     hub: area,
  //     enddate: `${new Date(dateRange[0].endDate)
  //       .toISOString()
  //       .slice(0, 10)} ${endTime}:00:00.000`,
  //     startdate: `${new Date(dateRange[0].startDate)
  //       .toISOString()
  //       .slice(0, 10)} ${startTime}:00:00.000`,
  //   };

  //   // Function to convert UTC Date to IST
  //   function convertToIST(input) {
  //     let date;

  //     // Convert input to a Date object
  //     if (input instanceof Date) {
  //       date = input; // Already a Date object
  //     } else if (typeof input === "string" || typeof input === "number") {
  //       date = new Date(input); // Parse strings or timestamps
  //     } else {
  //       throw new TypeError(
  //         "Invalid input: Expected a Date object, string, or number"
  //       );
  //     }

  //     // Check if the date is valid
  //     if (isNaN(date.getTime())) {
  //       throw new TypeError("Invalid date: Unable to parse the provided input");
  //     }

  //     // IST offset: 5 hours 30 minutes
  //     const istOffset = 5 * 60 * 60 * 1000 + 30 * 60 * 1000;
  //     return new Date(date.getTime() + istOffset);
  //   }

  //   // Create the localStorage object with converted dates
  //   var localStorageObj = {
  //     city: area,
  //     dateObj: dateRange.map((date) => ({
  //       startDate: convertToIST(date.startDate).toISOString(), // Convert to IST and to ISO string
  //       endDate: convertToIST(date.endDate).toISOString(), // Convert to IST and to ISO string
  //       key: date.key,
  //     })),
  //     areaLocation: area,
  //     e_time: endTime,
  //     s_time: startTime,
  //   };

  //   // Save to localStorage
  //   localStorage.setItem("carSearchParams", JSON.stringify(localStorageObj)); // Store as string
  //   console.log("Stored localStorageObj:", localStorageObj);
  //   actionHandler(localStorageObj);
  // };



const handleGetCar=()=>{
  router.push("/", { scroll: false }); 
}


  useEffect(() => {
    const temp = getCookie("carSearchParams");
    var paramsProp = JSON.parse(temp);

    const handleResize = () => {
      const isMobileDevice = window.innerWidth <= 650;
      setIsMobile(isMobileDevice);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    if (paramsProp) {
      setCity(paramsProp.city);
      setArea(paramsProp.areaLocation);
      setStartTime(paramsProp.s_time);
      setEndTime(paramsProp.e_time);
      setDateRange([...paramsProp.dateObj]);
    } else {
      setDateRange([
        {
          startDate: getValidDate(new Date(), "start"),
          endDate: getValidDate(new Date(), "end"),
          key: "selection",
        },
      ]);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isScreenSmall = useMediaQuery("(max-width: 1024px)");


  return (
    <div className="parentDiv">
    
    <div className="mobileLocationIcon">


<LocationOnIcon fontSize="medium" color="primary" className="LocationOnIcon" />
</div>
  
    <div className="mainContainer">
       
      <div className="locationMainContainer">
        {/* <div onClick={handleLocationOpen}> */}

     
        <div   style={{  cursor: "not-allowed" }}
        >
        
          <SearchPageHeading
            icon={<LocationOnIcon fontSize="small" color="primary" className="LocationOnIcon" />}
            title="Location"
            description={`${area} , ${city}`}
          />
        </div>





        <Modal
          open={showLocationPicker}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="locationOptionsContainer">
            <div
            
            >
              <InputLabel
                htmlFor="city"
                style={{
                  marginTop: "1rem",
                  marginBottom: "0.3rem",
                  color: "#000000", 
                  fontSize: "1rem",
                }}
              >
                {" "}
                 Select City
              </InputLabel>
              <Select
                id="city"
                className="popupDropdown"
                value={city}
                onChange={handleCityChange}
                IconComponent={(props) => (
                  <div
                    {...props}
                    style={{
                      position: "relative",
                      marginLeft: "10px",
                      marginRight: "10px",
                      marginTop: "7px",
                      width: "16px",
                      height: "10px",
                    }}
                  >
                    <div
                      style={{
                        width: 0,
                        height: 0,
                        borderLeft: "8px solid transparent",
                        borderRight: "8px solid transparent",
                        borderTop: "10px solid #276EBC",
                        borderRadius: "3px 3px 0 0",
                      }}
                    />
                  </div>
                )}
                sx={{
                  width: "100%",
                  borderRadius: "8px",
                }}
              >
                {CitiesList.map((option, index) => (
                  <MenuItem key={index} value={option} disabled={index != 0}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </div>

            <div>
              <InputLabel
                htmlFor="area"
                style={{
                  marginTop: "1rem",
                  marginBottom: "0.3rem",
                  color: "#000000",
                  fontSize: "1rem",
                }}
              >
                {" "}
                 Select Hub 
              </InputLabel>
              <Select
              className="popupDropdown"
                id="area"
                value={temparea || area}
                onChange={handleAreaChange}
                IconComponent={(props) => (
                  <div
                    {...props}
                    style={{
                      position: "relative",
                      marginLeft: "10px",
                      marginRight: "10px",
                      marginTop: "7px",
                      width: "16px",
                      height: "10px",
                    }}
                  >
                    <div
                      style={{
                        width: 0,
                        height: 0,
                        borderLeft: "8px solid transparent",
                        borderRight: "8px solid transparent",
                        borderTop: "10px solid #276EBC",
                        borderRadius: "3px 3px 0 0",
                      }}
                    />
                  </div>
                )}
                sx={{
                  width: "100%",
                  borderRadius: "8px",
                }}
              >
                {AreasList.map((option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div className="ModalButtonContainer"   style={{
                  display: "flex",
                  justifyContent: "end",
                  gap: "19px", // Space between buttons
                  marginTop: "1.5rem",
                }}>
               <CssButtonOutline
                  title="Cancel"
                  backgroundColor="#FFFFFF"
                  textColor="#276EBC"
                  fontSize="1rem"
                  borderRadius="9px"
                  width="100px"
                  height="42px"
                  fontWeight="normal"
                  border="1px solid #276EBC"
                  onClick={() => handleLocationCancel()}
                />
                <CssButtonSolid
                  title="Ok"
                  backgroundColor="#276EBC"
                  textColor="#fff"
                  fontSize="1rem"
                  borderRadius="9px"
                  fontWeight="normal"
                  width="100px"
                  height="42px"
                  border="1px solid #276EBC"
                  onClick={() => handleLocationClose()}
                />
            </div>
          </div>
        </Modal>
      </div>
      {!isScreenSmall && <Divider orientation="vertical" variant="fullWidth" flexItem   sx={{
    borderWidth: 1.5,
  }}/>}
      <div className="timeMainContainer">
        <Modal
          open={showPicker}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
        
        <div
        className="datepickerParent"
          style={{
            position: "absolute",
            zIndex: 1000,
            backgroundColor: "#ffffff",
            boxShadow: "1px 1px 1px 1px #EFEFEF",
            borderRadius: "20px",
            padding: "2%",
            outline:'none',
            // height: isMobile ? "90vh" : "80vh",
            maxHeight: "1000px",
            overflowY: "scroll",
            // width: isMobile ? "90%" : "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
           
          }}
        >
            <DateRange
              ranges={tempDateRange || dateRange}
              showMonthAndYearPickers={true}
              onChange={handleDateRangeSelect}
              staticRanges={defaultStaticRanges}
       
              minDate={getMinDate()}
              maxDate={getMaxDate()}
              months={monthsToShow}
              // months={isMobile ? 1 : 2}
              direction="horizontal"
              color="#276ebc"
              // className="popupdaterange"
              // startDatePlaceholder="Start Date"
              // endDatePlaceholder="End Date"


           

              renderMonthAndYear={(month, date) => (
                <div
                  className="rdrMonthName"
                  data-month={format(date, "MMMM")} 
                >
                  {format(date, "MMMM")}
                </div>
              )}

              
            />
              <div
                  style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    justifyContent: "space-between",
                    margin: "10px",
                    gap: isMobile ? "20px" : "50px",
                    marginTop: "30px", // Added more space between calendar and sliders
                  }}
                >
            <div 
            style={{
              flex: 1,
              // fontFamily: "Archivo",
              fontWeight: "400",
              fontSize: "14px",

            }}
            >
              <label>Start Time:</label>
              
              <Slider
                min={0}
                max={23}
                value={tempStartTime || startTime}
                step={1}
                onChange={(value) => handleSliderChange(value, "start")}
                tipFormatter={handleSliderTooltip}
                marks={getSlideMarks("start")}
                style={{ margin: "2% 0" }}
              />
            </div>
            <div  style={{
                      flex: 1,
                      // fontFamily: "Archivo",
                      fontWeight: "400",
                      fontSize: "14px",
                    }}>
              <label>End Time:</label>
              <Slider
                min={0}
                max={23}
                value={tempEndTime || endTime}
                step={1}
                onChange={(value) => handleSliderChange(value, "end")}
                tipFormatter={handleSliderTooltip}
                marks={getSlideMarks("end")}
                style={{ margin: "2% 0" }}
              />
            </div>
            </div>
            <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  marginTop: "30px", // Increased margin top
                  marginBottom: "20px", // Added margin bottom
                  gap: "1rem",
                }}
              >
                <CssButtonOutline
                  title="Cancel"
                  backgroundColor="#FFFFFF"
                  textColor="#276EBC"
                  margin="0"
                  fontSize="1rem"
                  width="100px"
                  height="45px"
                  borderRadius="11px"
                  border="1px solid #276EBC"
                  onClick={() => handleDateCancel()}
                />
                <CssButtonSolid
                  title="Ok"
                  backgroundColor="#276EBC"
                  textColor="#FFFFFF"
                  fontSize="1rem"
                  width="100px"
                  height="45px"
                                    borderRadius="11px"

                  border="1px solid #276EBC"
                  onClick={() => handleDateClose()}
                />
              </div>
          </div>
        </Modal>

        {/* <div onClick={handleDateOpen} className="timingContainer"> */}
        <div  className="timingContainer"   style={{ cursor: "not-allowed" }}
        >
          <SearchPageHeading
            icon={
              <WatchLaterIcon
                fontSize="small"
                color="primary"
                style={{ marginRight: "11px" }}
                className="searchPageTimeLeft" 
              />
            }
            title="Start Date & Time"
            description={formatDate(dateRange[0].startDate, "start")}
          />
          <div style={{ paddingLeft: "10px", paddingRight: "10px" }} className="arrowparent">
            {" "}
            <ArrowForwardIcon color="primary" fontSize="small" className="searchPageTime arrowIc"/>{" "}
          </div>
          <SearchPageHeading
            icon={<WatchLaterIcon fontSize="small" color="primary" className="searchPageTime" />}
            title="End Date & Time"
            description={formatDate(dateRange[0].endDate, "end")}
          />
        </div>
      </div>

      <div className="search_btn"> <CssButtonSolid
        title="Modify Search"
        backgroundColor="#276EBC"
        textColor="#fff"
        margin="0 0rem 0 0rem"
        padding="8px 30px"
        fontSize="1rem"
        border="1px solid #276EBC"
        width="200px"
        height="20%"
        onClick={handleGetCar}
      /></div>
     
    </div>
    </div>
  );
};

export default LocationDateTimePicker;




