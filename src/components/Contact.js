import React from 'react';
import '../css/index.css'
import '../img/linkedin.svg'

export const Contact = () => {
  return (
    <div className="contact">
      <p>Si te gustó mi trabajo contactame:</p>
      <a href="https://www.linkedin.com/in/felicitasaguerralde/" target="_blank" rel="noopener noreferrer" className='linkedin-link'>
      <div className='linkedin'>
      </div>
      </a>
      <a href="https://github.com/FelicitasAguerralde" target="_blank" rel="noopener noreferrer" className="github-link">
      <div className="github"></div>
      </a>
    </div>
  )
}
