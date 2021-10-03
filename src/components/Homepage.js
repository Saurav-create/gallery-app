import React from 'react';
import firstImg from "../pictures/1.jpg";
import secondImg from "../pictures/2.jpg";
import thirdImg from "../pictures/3.jpg";
import fourthImg from "../pictures/4.jpg";

import Cardpic from './card';

const Homepage = (props) => {
  return (
    <div>
      <Cardpic src={firstImg} />
      <Cardpic src={secondImg} />
      <Cardpic src={thirdImg} />
      <Cardpic src={fourthImg} />
      
    </div>
  );
};

export default Homepage;