import React, { useState, useEffect } from 'react';
import './ItemList.css';

//COMPONENTS
import Item from '../Item/Item';

const ItemList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
   // Fetch 
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setUsers(json))
  }, []);

  return (
      <div>
          {users.map((user) => {
              return (
                  <div key={user.id}>
                      <Item data={user} />
                  </div>
              )
          })}
      </div>
  )
};

export default ItemList;