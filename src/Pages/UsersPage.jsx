import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function UsersPage() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://dummyjson.com/users')
      .then(response => {
        setUsers(response.data.users);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const showWeather = (city) => {
    navigate(`/weather?cityName=${city}`);
  };

  return (
    <div className="users-page">
      <h1>Users</h1>
      <div className="users-list">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <img src  ={user.image} alt="" srcset="" />
            <p><strong>Username:</strong> {user.username}</p>

            <p><strong>Name:</strong> {user.firstName}</p>
            <p><strong>LastName:</strong> {user.lastName}</p>
            <p><strong>City:</strong> {user.address.city}</p>
            <p><strong>Age:</strong> {user.age}</p>
            <p><strong>Gender:</strong> {user.gender}</p>
            <hr />
            

            
            <button onClick={() => showWeather(user.address.city)}>Show weather</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsersPage;
