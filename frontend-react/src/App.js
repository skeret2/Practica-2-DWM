import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const [profile, setProfile] = useState();
  const [hobbies, setHobby] = useState();
  const [frameworks, setFramework] = useState();

  const getProfile = async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/profile');
    setProfile(response.data.profiles);
    setHobby(response.data.hobbies);
    setFramework(response.data.frameworks);
    console.log(response.data);
  };

  useEffect(() => {
    getProfile();
  }, []);

  return <div>Hola mundo</div>
}

export default App;
