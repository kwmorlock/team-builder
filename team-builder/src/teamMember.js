import React from "react";

const Member = ({teamMember}) => {
    const{name, email, role} = teamMember
    return (
        <div>
    <p>{name} | {email} | ({role})</p>
        </div>
    );
};


export default Member;

//no need for props on line 3 by doing it this way
//no need for .teamMembers in divs, because of line 4
// <> and </> around div is for multiple 