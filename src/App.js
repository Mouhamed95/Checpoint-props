
import './App.css';
import React from 'react';
import Profil from './Profil/Profil'
import handleName from './handleName'
import image from "./img.jpg"

function App() {

  const name ='Mouhamed Moustapha lo'
  const bio = 'Developper des applications pour rendre la vie facile' 
  const profession = 'Developer fullstack javascript'

  const handleName = () =>{
    alert(name)
  } 

  return (
    <div className="App">
      <Profil 
      name = {name}
      bio = {bio}
      profession = {profession}
      handleName = {handleName}
      >
      {image}
      </Profil>
      
      
    </div>
  );
}

export default App;
