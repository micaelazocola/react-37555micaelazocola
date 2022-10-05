import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/Products/ItemListContainer';
import ItemCount from './components/ItemCount';
import Card from './components/Products/card';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>

      <Routes> 
        <Route path="/" element= {<ItemListContainer/>}/>
        <Route path="/prendas/:id" element= {<ItemDetailContainer/>}/>
        <Route path= "category/:cat" element = {<ItemListContainer/>}></Route>
      </Routes>

      {/* <ItemCount initial= {1} stock={5}/> */}
      <ItemCount initial= {1} stock={6}/>
      <Link to="/Prendas"> Prendas </Link>
      <Link href="/"> Home </Link>
      {/* <header className="App-header"> </header>*/}
      </BrowserRouter>
    </div>
  );
}


export default App;

