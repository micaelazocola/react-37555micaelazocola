import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting= "Hola! Llegaste a mi Ecommerce!"/>
      <ItemCount initial= {1} stock={5}/>
      <ItemCount initial= {1} stock={8}/>
      <header className="App-header">
        
      </header>
      
      
      
    </div>
  );
}


export default App;
