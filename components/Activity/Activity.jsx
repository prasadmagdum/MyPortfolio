import React from 'react'
import './Activity.css'
import  image_EC from '../../assets/EC.JPG'
import  image_PC from '../../assets/PC.JPG'
import  image_AC from '../../assets/AC.JPG'


const activityImages = [
  { src: image_EC, alt: 'Extra Curricular Activity', caption: 'Extra Curricular' },
  { src: image_PC, alt: 'Professional Certificate', caption: 'Professional Certificate' },
  { src: image_AC, alt: 'Certificate', caption: 'Certificate' }
];

const Activity = () => {
  return (
    <div  id='activity'  className='activity'>
      <div className='activity-title'>
        <h1>My Activity</h1>
      </div>
      <div className='activity-images'>
        {activityImages.map((image, index) => (
          <div key={index} className='activity-image'>
            <img src={image.src} alt={image.alt} />
            <p>{image.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activity;
