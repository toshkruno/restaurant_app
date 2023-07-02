import React from 'react';

import { images } from '../../constants';
import './SubHeading4.css';

const SubHeading4 = () => (
  <div className='app__subheading-title'>
    <p>Newsletter</p>
    <img src={images.spoon} alt="about_spoon" className="spoon__img" />
  </div>
);

export default SubHeading4;
