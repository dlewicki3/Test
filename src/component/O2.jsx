import React from 'react';
import './O2.css';
import Film2 from './Film2.mp4'; // Poprawiona ścieżka

const O2 = () => {
  return (
    <div className="o2">
      <div className="modal-bg">
        <div className="pin">
          <div className="kwa" style={{ color: "black", fontWeight: "600" }}>Capabilities</div>
          <div className="kwa">Safety</div>
          <div className="kwa">Research</div>
        </div>
      </div>
      <div className="na-txt1">
        <p className='small-txt2'>
          We’re teaching AI to understand and simulate the physical world in motion, with the goal of training models that help people solve problems that require real-world interaction.
          <br></br>
          <br></br>
          Introducing Sora, our text-to-video model. Sora can generate videos up to a minute long while maintaining visual quality and adherence to the user’s prompt.
        </p>
      </div>
      <div className="for-vid">
        <video autoPlay muted loop className='video'  >
          <source src={Film2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default O2;
