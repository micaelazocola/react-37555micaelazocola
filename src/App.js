import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/Products/ItemListContainer';
import ItemCount from './components/ItemCount';
import Card from './components/Products/card';





function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer/>
      <ItemCount initial= {1} stock={5}/>
      <ItemCount initial= {1} stock={8}/>
      {/* <header className="App-header"> </header>*/}
      
       
      
      
      
      
    </div>
  );
}


export default App;
