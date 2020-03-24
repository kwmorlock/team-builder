import React, { useState } from "react";

const Form = (props) => {
  //   const [name, email, role] = (form);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const changeName = event => {
    setName(event.target.value);
  };
  const changeEmail = event => {
    setEmail(event.target.value);
  };

  const changeRole = event => {
    setRole(event.target.value);
  };

  return (
    <div>
      <form onSubmit = {event => props.addMember(event, name, email, role)}>
        <label>
          Name:{" "}
          <input
            id="firstName"
            type="text"
            onChange={event => changeName(event)}
            value={name}
          />
        </label>

        <label>
          Email:
          <input
            id="firstName"
            type="text"
            onChange={event => changeEmail(event)}
            value={email}
          />
        </label>

        <label>
          Role:
          <input
            id="firstName"
            type="text"
            onChange={event => changeRole(event)}
            value={role}
          />
        </label>
        <input type='submit'/>
      </form>
    </div>
  );
};

// <div>
//     <form>
//         <label>
// First Name: <input id='firstName' type='text' onChange={ event =>{

// }} value={name}/>
//         </label>

//         <label>
// Last Name: <input id='lastName' type=''/>
//         </label>

//         <label>
// Role: <input id='role' type=''/>
//         </label>

//    </form>
// </div>

export default Form;

//setting the value of the box to be a piece of state
