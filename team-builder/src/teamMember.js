import React from "react";

const Member = ({teamMember}) => {
    const{firstName, lastName, role} = teamMember
    return (
        <>
    <div>{firstName}</div>
    <div>{lastName}</div>
    <div>{role}</div>
        </>
    );
};


export default Member;

//no need for props on line 3 by doing it this way
//no need for .teamMembers in divs, because of line 4
// <> and </> around div is for multiple 