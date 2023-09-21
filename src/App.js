import './App.css';
import TextInput from './components/TextInput';
import Checkbox from './components/Checkbox';
import Header from './components/Header';
import Items from './components/Items';
import Category from './components/Category';
import { useState } from 'react';

const sportingGoods = [
  {id:1, name: 'Football', price: 49.99, stock: 0},
  {id:2, name: 'Baseball', price: 59.99, stock: 1},
  {id:3, name: 'Basketball', price: 69.99, stock: 2},
]

function App() {
  const[txtValue, setTxtValue] = useState('')
  const[showOnlyStock, setShowOnlyStock] = useState(false)

  const handleClick = () => {
    alert('Clicked')
  }
  return (
    <div className="App">
        <TextInput value= {txtValue} onChange={(e) => setTxtValue(e.target.value)}/>
        <Checkbox value= {showOnlyStock} onChange={(e) => setShowOnlyStock(e.target.checked)}/>
        <button>Submit</button>

        <table>
          <tbody>
            <Header></Header>
            <Category></Category>
            <Items items={sportingGoods} includePrice query={txtValue} showOnlyStock={showOnlyStock}/>
          </tbody>
        </table>
    </div>
  );
}

export default App;
