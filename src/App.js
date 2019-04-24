import React, { Component } from 'react';
import logo from './img/cceagnbLogo505050.png';

//import React from "react";
 import { BrowserRouter as Router, Route, Link } from "react-router-dom";
                    // <img src={logo} width={250}/>
import './stylemod.css';
import './loginestilos.css';
import './registroestilos.css';
import './inspector.css';
// import './font-awesome.min.css';



function App() {
  return (
    <Router>
      <div>
        <Header />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        <Route path="/login" component={login} />
        <Route path="/registro" component={registro} />
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topic({ match }) {
  return <h3>Requested Param: {match.params.id}</h3>;
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
      <li>
        <Link to="/login">login</Link>
      </li>
      <li>
        <Link to="/registro">registro</Link>
      </li>
    </ul>
  );
}

function login(){
  return(
  <article>
      <section className="contenido">
        <section className="contenido1">
            <div id="ingresar">
                <div className="logoLogin">
                    <img src={logo} alt="CCEAGNB" />
                </div>
                <div className="aviso"></div>
                <div className="form-group">
                    <form action="loginServer.php">

                        <label for="usuario">Usuario</label>
                        <input type="text" name="usuario" className="form-control" placeholder="usuario" />

                        <label for="contrasenia">Contraseña</label>
                        <input type="password" name="contrasenia" className="form-control" placeholder="contraseña" />

                        <div className="botoniniciarsesion">
                            <input type="submit" value="iniciar sesion" />
                        </div>

                        <div className="registrate">Registrate</div>
                    </form>
                </div>
            </div>
        </section>
      </section>
  </article>
    );
}

function registro(){
  return(
    //TODO colocar seleccionar organizacion
    //TODO colocar imagen a la jerarquia (estrellas) en el select
    
    <section className="contenido1">
    <div id="ingresar">
        <div className="logoLogin">
            <img src={logo} alt="CCEAGNB" />
        </div>
        <div className="aviso"></div>
        <div className="form-group">
            <form id="formseccion" action="registrar.php">
                <label for="cedula">Cédula de identidad</label>
                <input type="text" name="cedula" className="form-control" />
                <span className="estatus estatuserror cedula"></span>
                <label for="nombre">Nombre</label>
                <input type="text" name="nombre" className="form-control" />
                <span className="estatus estatuserror nombre"></span>
                <label for="apellido">Apellido</label>
                <input type="text" name="apellido" className="form-control" />
                <span className="estatus estatuserror apellido"></span>
                <label for="jerarquia">Jerarquía</label>
                <select name="jerarquia" className="selectjerarquia">
                  <option value="" selected>Seleccione</option>
                  <option value="tte">Teniente</option> 
                  <option value="ptte">Primer Teniente</option>
                  <option value="cap">Capitán</option>
                  <option value="may">Mayor</option>
                  <option value="tcnel">Teniente Coronel</option>
                  <option value="cnel">Coronel</option>
                </select>
                <span className="estatus estatusjerarquia"></span>
                <label for="contrasenia">Contraseña</label>
                <input type="password" name="contrasenia" className="form-control" />
                <span className="estatus estatuserror contrasenia"></span>
                <div className="botoniniciarsesion">
                    <input type="submit" value="Registrar" />
                </div>
                <div className="iniciasesion">Inicia sesión</div>
            </form>
        </div>
            </div>
    </section>
    );
}

export default App;