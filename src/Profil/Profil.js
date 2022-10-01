import React from "react";

const Profil = (props) => {
    return(
        <>
      
        <h1>{props.name}</h1>
        <h1>{props.bio}</h1>
        <h1>{props.profession}</h1>
        <img src={props.children} alt="logo" />

        <div>
    <button onClick={props.handleName}> alerte </button>
        </div>
        

        
        </>
    )
}
export default Profil ;