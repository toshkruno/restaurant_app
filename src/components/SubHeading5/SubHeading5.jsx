import React from 'react';

import { images } from '../../constants';
import './SubHeading5.css';

const SubHeading5 = () => (
  <div className='app__subheading-title'>
    <p>Newsletter</p>
    <img src={images.spoon} alt="about_spoon" className="spoon__img" />
  </div>
);

export default SubHeading5;
