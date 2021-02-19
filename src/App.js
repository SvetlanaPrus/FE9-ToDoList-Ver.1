import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import Table from "./Table";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {

    const [items, setItems] = useState([])     //list is empty; we don't have anything to buy

    const [name, setName] = useState('')       //input for name
    const [price, setPrice] = useState('')     //input for price

    function add(name, price) {                                     //variables came from input
        let newList = [];                                          //new variable
        if (items.length === 0) {                                  //if list is not exist, we need to start from item nr.1
            newList = [{id: uuidv4(), name: name, price: price}]
        } else {
            newList = [...items, {id: uuidv4(), name: name, price: price}]};
        setItems(newList)
        setName('')                       //clear input for name
        setPrice('')                      //clear input for price
    }

    function deleteFromList(id) {
        const newList = items.filter(el => el.id !== id);
        setItems(newList);
    }

    return (
        <div className="container m-4">
            <h1>Shop - Ver.1</h1>
            <hr/>
            <Table items={items} deleteFromList={deleteFromList}/>
            <input placeholder="Item's name"
                   type="text" value={name}
                   onChange={(e) => setName(e.target.value)}/>
            <input placeholder="Item's price"
                   type="number" value={price}
                   onChange={(e) => setPrice(e.target.value)}/>
            {name && price?
                  <button className="btn btn-primary m-4" onClick={() => add(name, price)}>Add</button>
                : <button disabled="true" className="btn btn-primary m-4">Add</button>
            }
        </div>

    )
}