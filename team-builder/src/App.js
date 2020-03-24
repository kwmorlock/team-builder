import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // const teamMembers = [
  //   {firstName: 'kenzie', lastName: 'morlock', role: 'Goddess'},
  //   {firstName: 'marissa', lastName: 'cooter', role: 'NonFurry'},
  //   {firstName: 'zoe', lastName: 'stokes', role: 'Furry'},
  //   {firstName: 'christina', lastName: 'harris', role: 'Cat Lady'},    
  // ]

  const [teamMembers, setTeamMembers] = useState([
    {firstName: 'kenzie', lastName: 'morlock', role: 'Goddess'},
    {firstName: 'marissa', lastName: 'cooter', role: 'NonFurry'},
    {firstName: 'zoe', lastName: 'stokes', role: 'Furry'},
    {firstName: 'christina', lastName: 'harris', role: 'Cat Lady'},    
  ]);

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      {teamMembers.map(member)}
    </div>


  );
};

export default App;
