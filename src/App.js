import React, { useState, useEffect } from "react";
import "./App.css";
import * as firebase from "firebase/app";
import "firebase/auth";
import config from "./config";
import RegisterUser from './components/RegisterUser';


firebase.initializeApp(config);

function App() {
  return (
    <div>
      <RegisterUser/>
    </div>
  );
}

export default App;
