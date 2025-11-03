import React from 'react';
import { uid } from 'react-uid';
import { Divider } from '@/Components';
import './Testimonials.scss';
import Card from './Card';
import { assets } from '@/assets';


const testimonialsInfo = [
  {
    name: "Nithin Varma",
    content: "The best application for car rentals at reasonable prices and thier service is very good. Cars are well maintained and when compared to zoom and other platforms they offer a lot at very low prices",
    avatar: assets.images.testimonials.sofia,
  },
  {
    name: "Naga Sai Daliparthi",
    content: "This Application is just lit ✨ The main reason is it contains Bidding process and It has many other reasons for choosing only it 🖤 Once Try this Application",
    avatar: assets.images.testimonials.arthim,
  },
  {
    name: "Pasam Sunny",
    content: "Friendly staff and all new top end vehicles and zero documentation they will provide the cars and good services",
    avatar: assets.images.testimonials.sunny,
  },
];

const Testimonials = () => {
  return (
    <div className='testimonials'>
      <div className='testimonialsContainer'>
        <div className='SectionTitle'>
          <h1>Testimonials</h1>
          <p>Hear From Our Ryders</p>
          <Divider />
        </div>
        <div className='testimonialsContainerCards'>
          {testimonialsInfo?.map((testimonial) => (
            <Card data={testimonial} key={uid(testimonial)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
