import React from 'react';
import '../../../src/App.css';
import './herro.css';

import style from './hero.module.scss';
import { Button } from '../button/button';
function HeroSection() {
  return (
    <div className={style.heroContainer}>
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>Adventure Awaits</h1>
      <p>What are you waiting for??</p>
      <div className="hero-btns">
        <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
          GET STARTED
        </Button>
        <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
