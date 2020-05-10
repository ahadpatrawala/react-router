import React, { useEffect, useState } from 'react';
import './App.css';
import FortNiteApi from 'fortnite-api-io';
import {Link} from 'react-router-dom';

function ItemDetails( {match}) {

    useEffect(() =>{
        fetchItem();
    },[]);

    const fortniteAPI = new FortNiteApi(`fa4b6a76-8e54f022-47fe33bb-bc5e95f2`);
    const [item,setItem] = useState(
        {
            images:{},
            styles:[]
        }
        );

    
    const fetchItem = async () =>{
        const fetchItem = await fortniteAPI.getItemDetails(match.params.id);
        const item =await fetchItem;
        setItem(item.item)
        console.log(item.item)
    }

  return (
    <div>
       <h1>{item.name}</h1>
        <img src={item.images.icon}/>
       <p><strong>Description:</strong> {item.description}</p><br/>
       <p><strong>Price:</strong> {item.price}</p><br/>
       <p><strong>Rarity:</strong> {item.rarity}</p>
    </div>
  );
}

export default ItemDetails;