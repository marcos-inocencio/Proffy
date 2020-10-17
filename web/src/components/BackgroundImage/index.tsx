import React from 'react';

import logoImg from '../../assets/images/logo.svg';

import './styles.css';

function BackgroundImage () {
  return (
    <div className="background-image">
      <div className="description">
        <img src={logoImg} alt="Proffy"/>
        <h2>Sua plataforma de <br/> estudos online.</h2>
      </div>
    </div>
  );
}

export default BackgroundImage;