import React from 'react';

import { images } from '../../constants';
import './SubHeading3.css';

const SubHeading3 = () => (
  <div className='app__subheading-title'>
    <p>Instagram</p>
    <img src={images.spoon} alt="about_spoon" className="spoon__img" />
  </div>
);

export default SubHeading3;
