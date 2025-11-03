import React from 'react';
import Image from 'next/image';
import './Card.scss';
import { assets } from '@/assets';

const Card = ({ data }) => {
  return (
    <div className='testimonialCard' >
      {/* Testimonial Icon with overlay */}
      <Image
        src={assets.images.testimonials.testimonialIcon}
        alt='testimonial icon'
        width={75.25}
        height={80.26}
        style={{
          objectFit: 'contain',
          position: 'absolute',
          //marginTop: '-20px', // Adjusted for overlay effect
          left: '20px'
        }}
      />

      <div className='testimonialCardContainer' style={{ paddingTop: '60px' }}>
        {/* Add spacing after content */}
        <p >{data.content}</p>

        {/* Profile Section with Image and Name */}
        <div className='testimonialCardContainerProfile'>
          <div className='profileImageWrapper'>
            <Image
              src={data.avatar}
              alt='avatar'
              width={60.2}
              height={64.21}
              style={{ borderRadius: '50%', objectFit: 'cover' }}
            />
          </div>
          <h5 className='profileName'>{data.name}</h5>
        
        </div>
        <div style={{position:'absolute',bottom:'5px',right:'56px',fontWeight:'300'}}>
            source:  {data.name=="Pasam Sunny" ?
           
           <Image
           src={assets.images.testimonials.appstore}
         style={{marginTop:0,marginBottom:0,width:'20px',height:'20px',position:'absolute'}}
           alt='testimonial icon'
           width={25}
           height={26}
         
         />
            :<svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_353_1370)">
<path d="M8.66441 9.13936C10.086 8.2287 11.1637 7.53479 11.2566 7.48087C11.5538 7.29647 11.8606 6.80852 11.2566 6.42949C11.0616 6.31033 10.0116 5.63798 8.66441 4.771L6.79688 6.97135L8.66441 9.13936Z" fill="#FFD900"/>
<path d="M6.79605 6.97168L0.849609 13.9637C0.989178 13.9852 1.14677 13.9421 1.33255 13.8229C1.7226 13.5738 5.85743 10.9394 8.66359 9.14023L6.79605 6.97168Z" fill="#F43249"/>
<path d="M6.79553 6.97157L8.66306 4.782C8.66306 4.782 1.75027 0.380745 1.33203 0.120865C1.17444 0.0119521 0.997898 -0.0203982 0.839844 0.0119521L6.79553 6.97157Z" fill="#00EE76"/>
<path d="M6.79619 6.97134L0.840503 0.0117188C0.5988 0.0769585 0.394531 0.326056 0.394531 0.835572C0.394531 1.64864 0.394531 12.4671 0.394531 13.1395C0.394531 13.6058 0.552585 13.9417 0.849746 13.9741L6.79619 6.97134Z" fill="#00D3FF"/>
</g>
<defs>
<clipPath id="clip0_353_1370">
<rect width="12" height="14" fill="white"/>
</clipPath>
</defs>
</svg>}
{data.name=="Pasam Sunny"?<span style={{paddingLeft:'20px',fontSize:'14px'}}>App Store</span>:<span style={{paddingLeft:'',fontSize:'14px'}}>Play Store</span>}
          </div>
      </div>
    </div>
  );
};

export default Card;
