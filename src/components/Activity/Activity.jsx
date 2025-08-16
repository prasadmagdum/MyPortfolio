import React from 'react';
import './Activity.css';
import image_EC from '../../assets/EC.JPG';
import image_PC from '../../assets/PC.JPG';
import image_AC from '../../assets/AC.JPG';
import image_RC from '../../assets/RC.JPG';
import image_IC from '../../assets/IC.JPG';
import image_JC from '../../assets/JC.JPG';


const activityImages = [
  { src: image_EC, alt: 'Extra Curricular Activity', caption: 'Extra Curricular', pdf: '/certificates/EC.pdf' },
  { src: image_PC, alt: 'Professional Certificate', caption: 'Professional Certificate', pdf: '/certificates/PC.pdf' },
  { src: image_AC, alt: 'Academic Certificate', caption: 'Academic Certificate', pdf: '/certificates/AC.pdf' },
  { src: image_RC, alt: 'Research Certificate', caption: 'Research Certificate', pdf: '/certificates/RC.pdf' },
  { src: image_IC, alt: 'Internship Certificate', caption: 'Internship Certificate', pdf: '/certificates/IC.pdf' },
  { src: image_JC, alt: 'Java Certificate', caption: 'Java Certificate', pdf: '/certificates/JC.pdf' },

];

const Activity = () => {
  return (
    <div id="activity" className="activity">
      <div className="activity-title">
        <h1>My Activity</h1>
      </div>
      <div className="activity-images">
        {activityImages.map((image, index) => (
          <div key={index} className="activity-image">
            <a href={image.pdf} target="_blank" rel="noopener noreferrer">
              <img src={image.src} alt={image.alt} />
            </a>
            <p>{image.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activity;
