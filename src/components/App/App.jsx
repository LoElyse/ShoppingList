import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from '../Header/Header.jsx';
import './App.css';



function App() {


// STATE api:

const [items, setItems] = useState([]);

//STATE input:

const [itemInput, setItemInput] = useState('');
const [quantityInput, setQuantityInput] = useState('');
const [unitInput, setUnitInput] = useState('');

useEffect(() => {
    getItems()    
    },[])


// TODO: fetch the list of items from the server
const getItems = () => {
axios.get('/api/items')
    .then((response) => {
      console.log('We got items:', response.data);
    setItems(response.data);
    })
    .catch((error) => {
      console.log('bummer error in get route:', error);
    })
}

// TODO: POST

const addItem = (event) => {
    console.log('click button')
    event.preventDefault();
    // console.log(`The person is ${famousPersonName} and they're famous for ${famousPersonRole}`);
    // TODO: create POST request to add this new person to the database
    axios.post('/api/items',
      {
        item: itemInput,
        quantity: quantityInput,
        unit: unitInput
      })
    
      .then((response) => {
        // 2. When we know the POST is succesful, we call our
        //    fetchCountries function:
        getItems();
        // 3. And we clear out the form inputs:
        setItemInput('');
        setQuantityInput('');
        setUnitInput('');

      })
      .catch((error) => {
        console.log('bummer error in server:', error);
      })
  }


return (
  
    <div className="App">
      <Header />
      <main>
        <form onSubmit={addItem} >
        <h1>Add an Item</h1>
        Input: <input type="text" onChange={(event) => setItemInput(event.target.value)}  value={itemInput}  placeholder="add Item"/>
        Quantity: <input type="text" onChange={(event) => setQuantityInput(event.target.value)}  value={quantityInput}  placeholder="add quantity"/>
        Unit: <input type="text" onChange={(event) => setUnitInput(event.target.value)}  value={unitInput}  placeholder="add unit"/>

     <button type="submit">Save</button>
     </form>
      </main>
      
        <h1>Shopping List</h1>
        {/* <Header{itemInput.}/> */} 
        <button>Reset</button>
        <button>Clear</button>
        <section className="listContainer">
        {
            items.map((item) => {
              return <div className="item" key={item.id}><div>{item.item}</div> <div>{item.quantity}</div> <div>{item.unit}</div> <div>{item.purchased}</div> <button className='butt'>Buy</button>
              <button className='butt'>Remove</button></div>
            })
          }
        </section>
        </div>
   
    
  );
}

export default App;
