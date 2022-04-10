import React from 'react';
import { BackgroundWrapper } from './BackgroundCss';
import backgroundEarth from './utils/BackgroundEarth.png';
import backgroundNightEarth from './utils/BackgroundNightEarth.png';
const Background = ({ listLength, isDarkTheme }) => {
  return (
    <BackgroundWrapper isDarkTheme={isDarkTheme}>
      <div className="skyBackground" style={{ height: `${listLength * 175 - 350}px` }} alt="background" />
      <img className="background" src={isDarkTheme ? backgroundNightEarth : backgroundEarth} alt="background" />
    </BackgroundWrapper>
  );
};

export default Background;
