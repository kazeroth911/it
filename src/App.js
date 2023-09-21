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
  const[txtValue, setTxtValue] = useState('Hey')

  const handleClick = () => {
    alert('Clicked')
  }
  return (
    <div className="App">
        {txtValue}
        <TextInput value= {txtValue} onChange={(e) => setTxtValue(e.target.value)}/>
        <Checkbox/>
        <button>Submit</button>

        <table>
          <tbody>
            <Header></Header>
            <Category></Category>
            <Items items={sportingGoods}/>
          </tbody>
        </table>
    </div>
  );
}

export default App;
