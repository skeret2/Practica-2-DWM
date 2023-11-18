import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import UncontrolledExample from './carrusel';
import Table from 'react-bootstrap/Table';

function App() {
  const [profiles, setProfiles] = useState([]);

  const getProfile = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/profile');
      setProfiles(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />

      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Profile</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#datos">Datos personales</Nav.Link>
              <Nav.Link href="#intereses">Intereses</Nav.Link>
              <Nav.Link href="#herramientas">Heramientas tecnologicas</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {profiles.map(profile => (
        <div key={profile.id}>
          <section id='datos' className='datos'>
            <div className='container-home'>
              <img src="imagen_profile.jpg" alt="Italian Trulli" />

              <h2>{profile.name} {profile.lastname}</h2>
              <p>Email: {profile.email}</p>
              <p>Ciudad de origen: {profile.city}</p>
              <p>Pais: {profile.country}</p>
              <p>{profile.sumary}</p>

              <div className="home-sci">
                <a href="https://github.com/skeret2" target="_blank">
                  <i className="bx bxl-github" />
                </a>
                <a href="https://www.instagram.com/scar_annais/" target="_blank">
                  <i className="bx bxl-instagram" />
                </a>
              </div>

            </div>
          </section>
          
          <section id='intereses'>
            <div className='intereses'>
              <div className='intereses-datos'>
                <h2>Hobbies:</h2>
                <h3>Algunos de mis intereses son...</h3>
                <ul>
                  {profile.hobbies.map(hobby => (
                    <li key={hobby.id}>
                      <p>{hobby.name_hobby}</p>
                      <p>{hobby.despription}</p>
                    </li> 
                  ))}
                </ul>
              </div>
              
              <div className='carrusel'>
                <UncontrolledExample/>
              </div>

            </div>

          </section>
          
          <section id='herramientas'>
            <div className='herramientas'>
              <h2>Herramientas tecnológicas:</h2>
                <Table striped bordered hover className='tabla-herramientas'>
                  <thead>
                    <tr>
                      <th>Nombre de la herramienta</th>
                      <th>Nivel</th>
                      <th>Año</th>
                    </tr>
                  </thead>
                  <tbody>
                    {profile.frameworks.map((framework, index) => (
                      <tr key={index}>
                        <td>{framework.name_framework}</td>
                        <td>{framework.level}</td>
                        <td>{framework.year}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>

                <div className='imagenes'>
                  <img src='imagenes/power_bi.png' height='100' width='100' />
                  <img src='imagenes/visual.png' height='100' width='100' />
                  <img src='imagenes/mysql.png' height='80' width='150' />
                </div>
            </div>
          </section>
        
        </div>
      ))}
    </div>
  );
}

export default App;
