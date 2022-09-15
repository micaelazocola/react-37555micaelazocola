import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting= "Hola! Llegaste a mi Ecommerce!"/>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. holaaaaaa 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
      
      
    </div>
  );
}


export default App;
