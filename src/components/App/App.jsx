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



// TODO: fetch the list of people from the server
const getItems = () => {
axios.get('/api/items')
    .then((response) => {
      console.log('We got famous peopple:', response.data);
    // setItems(response.data);
    })
    .catch((error) => {
      console.log('bummer error in get route:', error);
    })
}

// useEffect(() => {
// getItems()    
// },[])

return (
    <div className="App">
      <Header />
      <main>
        <h1>Add an Item</h1>
        Input: <input type="text" />
        Quantity: <input type="text" />
        Unit: <input type="text" />
      </main>
      <body>
        <h1>Shopping List</h1>
        {/* <Header{itemInput.}/> */} 
        <button>Reset</button>
        <button>Clear</button>
        <ul>
            <li>
                Apples
                5 lbs
            </li>
        </ul>
        <button>Buy</button>
        <button>Remove</button>
      </body>
    </div>
  );
}

export default App;
