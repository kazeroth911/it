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

const handleclick =()=>{
  alert("Clicked")
}
function App() {
const [txtValue,setTxtValue] = useState('')
const [form,setForm] = useState({
    nameItem: '',
    priceItem: '0',
    stockItem: '0',
})

const [data,setData] = useState(sportingGoods)


const handleForm=(e) => setForm({...form,[e.target.id]: e.target.value})
const handleSubmit =(e) =>{
  console.log(form)
  e.preventDefault()
  setData([...data,{id:data.length + 1 ,name:form.nameItem,price: form.priceItem,stock: form.stockItem}])
}


const [showOnlyStock,setShowOnlyStock] = useState(false)
  return (
    <div className="App">
      <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap :10 ,marginBottom:20}}>
          <div>
            <label htmlFor='nameItem'>Name: </label>
            <input id="nameItem" type="text" value={form.nameItem} onChange={handleForm}/>
          </div>
          <div>
            <label htmlFor='priceItem'>Price: </label>
            <input id="priceItem" type="number" value={form.priceItem} onChange={handleForm}/>
          </div>
          <div>
            <label htmlFor='stockItem'>Stock: </label>
            <input id="stockItem" type="number" value={form.stockItem} onChange={handleForm} />
          </div>
          <input type="submit"/>
      </form>
        <TextInput value={txtValue} onChange={(e)=> setTxtValue(e.target.value)}/>
        <Checkbox value={showOnlyStock} onChange={(e)=> setShowOnlyStock(e.target.checked)}/>
        <button onClick={handleclick}>Submit</button>
        <table>
          <tbody>
            <Header/>
            <Category />
            <Items items={data} query={txtValue} showOnlyStock={showOnlyStock}/>
            <tr>
              <td style={{textAlign:'right'}}colSpan={'2px'}>Total</td>
              <td style={{paddingLeft:'50px'}}>{data.reduce((total,sportingGood)=>{return total + parseInt(sportingGood.stock)},0)}</td>
            </tr>
          </tbody>
          
        </table>
    </div>
    
  );
}


export default App;
