import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import wave1 from './assets/wave1.png'
import './App.css';

const App = () => {
  const [activeCard, setActiveCard] = useState('');
   
 

  const scrollToCard = (id) => {
    setActiveCard(id);
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
    });
  };


  

  return (
    <div className="App">
      <div className="button-container">
        <button className="scroll-button btn btn-outline-danger" onClick={() => scrollToCard('card1')}>Go to Card 1</button>
        <button className="scroll-button btn btn-outline-primary " onClick={() => scrollToCard('card2')}>Go to Card 2</button>
        <button className="scroll-button btn btn-outline-info " onClick={() => scrollToCard('card3')}>Go to Card 3</button>
      </div>
      <div className="cards ">
        
          <div data-aos='linear' className={`card ${activeCard === 'card1' ? 'active' : ''}    `} id="card1"></div>
        <div    className={`card ${activeCard === 'card1' ? 'active' : ''}   `} id="card2">
          <h3>Submit Application</h3>
          <p>Introduce yourself and discuss your reasons for wanting to participate in this programs.</p>
          <p>valuable resources for students, educators. </p>
        </div>
          {/* <img className='w-75 h-25 position-relative' src={wave1}alt="" />/ */}

       
         
          <div data-aos="fade-up-right" className={`card ${activeCard === 'card2' ? 'active' : ''}  `} id="card3"></div>
       
        <div data-aos="fade-up-left" className={`card ${activeCard === 'card2' ? 'active' : ''}  `} id="card4">
          <h3>Select your domain</h3>
          <p>Choose the domain of your interest and ge started with the program. </p>
          <p>we offer a robust calendar of events, workshop.  </p>
        </div>

         
          <div data-aos="flip-right" className={`card ${activeCard === 'card3' ? 'active' : ''}   `} id="card5"></div>
        
        <div data-aos="flip-left" className={`card ${activeCard === 'card3' ? 'active' : ''}  `} id="card6">
          <h3>Certification</h3>
          <p>Get certification after completion of the workshop.Join us in embracing the future of learning, where technology meets personalized education, creating opportunities for everyone to thrive.
          </p>
        </div>

      </div>
    </div>
  );
};

export default App;
