import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Member from "./teamMember";
import Form from "./Form"

function App() {
  // const teamMembers = [
  //   {firstName: 'kenzie', lastName: 'morlock', role: 'Goddess'},
  //   {firstName: 'marissa', lastName: 'cooter', role: 'NonFurry'},
  //   {firstName: 'zoe', lastName: 'stokes', role: 'Furry'},
  //   {firstName: 'christina', lastName: 'harris', role: 'Cat Lady'},    
  // ]

  const [teamMembers, setTeamMembers] = useState([
    {name: 'kenzie morlock', email: 'morlock@email.com', role: 'Goddess'},
    {name: 'marissa cooter', email: 'cooter@email.com', role: 'NonFurry'},
    {name: 'zoe stokes', email: 'stokes@email.com', role: 'Furry'},
    {name: 'christina harris', email: 'harris@email.com', role: 'Cat Lady'},    
  ]);

  const addMember = (name, email, role) => {
    // event.preventDefault()
    //existing = existing piece of state!!!!!
    setTeamMembers(existing => [...existing, {name: name, email: email, role: role}])

  }

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
    <>
    <div>
      {teamMembers.map(member => (
        <Member teamMember={member}/>
      ))}
    </div>
    <Form addMember = {addMember}/>
    </>


  );
};

export default App;
