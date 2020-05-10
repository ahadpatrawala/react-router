import React, { useEffect, useState } from 'react';
import './App.css';
import FortNiteApi from 'fortnite-api-io';
import {Link} from 'react-router-dom';

function Shop() {

    useEffect(() =>{
        fetchItems();
    },[]);

    const fortniteAPI = new FortNiteApi(`fa4b6a76-8e54f022-47fe33bb-bc5e95f2`);
    const [items,setItems] = useState([]);

const fetchItems = async () => {
    const data = await fortniteAPI.listItems();
    const items = await data;
    console.log(items.items.backpack);
    setItems(items.items.backpack);
};

  return (
    <div>
        {items.map(item => (
            <h1 key={item.id}>
                <Link to={`/shop/${item.id}`}>{item.name}</Link>
                </h1> 
        ))}
    </div>
  );
}

export default Shop;