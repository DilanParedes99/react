import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';

function App() {
  let nombre ="dilan";
  let auth = false;
  let estaciones = ["primavera", "otoño", "verano", "invierno"];

  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label htmlFor="nombre">NOmbre</label>
        <input type="text" id="nombre"/>
        <h1>{nombre}</h1>
        <p>{auth ? "el usuario esta logueado" : "el usuario no esta logueado"}</p>
        <p>{2+3}</p>
        
        <ul>
         { estaciones.map ( el => (
          <li>{el}</li>
          )
         )}
        </ul>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
         <h1>que onda </h1>
         
      </header>
    </div>

    <section>
          <Componente msg="Hola sou un coponente desde prop"></Componente>
    </section>

    <div className="bienvenido">
      <h1 className="title">Bienvenido</h1>
      <h1 className="title">Usuario</h1>
    </div>
    </>
  );
}

export default App;
