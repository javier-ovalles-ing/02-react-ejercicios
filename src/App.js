import React from 'react';
import ContactForm from './components/ContacForm';
import CrudApi from './components/CrudApi';
import { CrudApp } from "./components/CrudApp";
import SelectsAnidados from './components/SelectsAnidados';
import SongSearch from "./components/songSearch";
import Modals from "./components/Modals";

function App() {
  return (
   <div>
     <h1>Hejercicios con React</h1>
     <hr/>
     <Modals/>
     <hr/>
     <ContactForm/>
     <hr/>
     <SelectsAnidados/>
     <hr/>
     <SongSearch/>
     <hr/>
     <CrudApi/>
     <hr/>
     <CrudApp/>
   </div>
  );
}

export default App;

