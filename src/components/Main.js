import React from 'react';

const Main = () => {
  return (
    <div className="main">
      <div className="col col1">
        <h2>Car Garage</h2>
        <p>"Your Car, Our Craftsmanship"<br/>The world of automotive engineering and performance has given birth to a league of extraordinary machines, pushing the boundaries of speed and technology. These modern marvels are the world's fastest cars, where acceleration defies comprehension and aerodynamics conquer air resistance.<br/> From hypercars like the Bugatti Chiron, capable of reaching speeds beyond 300 miles per hour, to the electrifying McLaren Speedtail with its futuristic design and astonishing top speeds, these vehicles embody the epitome of automotive achievement. These machines don't just break records; they shatter expectations, showcasing the synergy between engineering prowess and artistic design.</p>
        <button type="button">More</button>
      </div>
      <div className="col">
        <div className="card-container">
          <div className="card card1"></div>
          <div className="card card2"></div>
          <div className="card card3"></div>
          <div className="card card4"></div>
          <div className="card card5"></div>
          <div className="card card6"></div>
        </div>
      </div>
    </div>
  );
}

export default Main;
