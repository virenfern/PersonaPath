import React from 'react';
import './navbar.css';
import applyingPieces from './assets/applying_pieces.jpeg';
import horoscopeCircle from './assets/horoscope_circle.jpeg';
import thinking from './assets/thinking.jpeg';

function Nav() {
  return (
    <div className="nav">
      <div className="nav-bar">
        <div className="nav-left">
          <img src="#" alt="LOGO" />
        </div>
        <div className="nav-right">
          <h2 className="nav-item">How it works</h2>
          <h2 className="nav-item">Login</h2>
          <h2 className="nav-item-h">Sign Up</h2>
        </div>
     
      </div>

      <div className="tagline">
        We help you know what you<br />
        <span >truly are</span>
      </div>
      <div className="b-tagline">
        Our Tests help you learn what your personality is and also guide
        <br/><span> you on what career, relation types, hobbies, etc suit you best</span>
      </div>
      <div className="short-line"></div>
      <div className="second-tag">
  The perfect fusion of personality<br/>
  and astrology
      </div>
      <div className="below-second-tag">
        Combining the best of both worlds, our platform mixes the scientific analysis of<br/><span> personality tests like MBTI types and the spiritual relevance of astrology. Bringing</span><br/><span> the best of both worlds, we aim to give you the best analysis of your personality</span><br/> and what suits you best in terms of hobbies, relationships, jobs and so much more....
      </div>
      <div className="small-overlap">
  <img src={applyingPieces} alt="Applying pieces" className="front-img" />
  <img src={horoscopeCircle} alt="Horoscope circle" className="back-img" />
</div>
<div className="th-short-line"></div>
<div className="below-second-line">
<div className="tag-bsl">How it works</div>
<div className="below-tag-bsl">
1.You Take a Personality Test<br/>
2.We perform an analysis based on your response to the questionnaire<br/><span>
  on factors we blend from data collected.
</span>
</div>
  </div>
  <div className="img-2">
    <img src={thinking} alt="Applying pieces" className="img-2-l" />
  </div>
    </div>
    

    
  );
}


export default Nav; 
