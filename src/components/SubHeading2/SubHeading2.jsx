import React from 'react';

import { images } from '../../constants';
import './SubHeading2.css';

const SubHeading2 = () => (
  <div className='app__subheading-title'>
    <p>Awards & recognition</p>
    <img src={images.spoon} alt="about_spoon" className="spoon__img" />
  </div>
);

export default SubHeading2;
