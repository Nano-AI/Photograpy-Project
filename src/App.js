import Container from 'react-bootstrap/Container'
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="jumbo-title" class="jumbotron p-5">
        <h1>How to use a camera</h1>
        <p>The basics of how to use a camera.</p>
      </div>
      <div class="mt-2"></div>
      <Container class="mt-2">
        <h1>Welcome!</h1>
        <p>Welcome to my guide! Feel free to go around the page using the navigation bar at the top!</p>
        <h2>What is this?</h2>
        <p>This is supposed to be a guide for people learning how to use a camera, this will teach you the basics of it.</p>
        <h2>Recommended Order</h2>
        <ol>
          <li><a>Diagram of a DSLR</a></li>
          <li>
            <a>Amazing Aperture</a>
            <ol>
              <li><a>What is it?</a></li>
              <li><a>F-Stop</a></li>
              <li><a>Depth of Field</a></li>
            </ol>
          </li>
          <li><a>Super Shutter Speed</a></li>
          <li><a>Incredible ISO</a></li>
          <li><a>Working Together</a></li>
        </ol>
      </Container>
    </div>
  );
}

export default App;
