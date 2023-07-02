import React from 'react';

import { images } from '../../constants';
import './SubHeading.css';

const SubHeading = () => (
  <div className='app__subheading-title'>
    <p>Menu that fits your pallate</p>
    <img src={images.spoon} alt="about_spoon" className="spoon__img" />
  </div>
);

export default SubHeading;
