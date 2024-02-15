import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css'; // Import the CSS file

function UserList() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setListOfUsers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="wrapper">
      <h1>List of Users</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {listOfUsers.map(user => (
            <tr key={user.id}>
              <td><a href="#"><span>{user.id}</span></a></td>
              <td><a href="#"><span>{user.name}</span></a></td>
              <td><a href="#"><span>{user.username}</span></a></td>
              <td><a href="#"><span>{user.email}</span></a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
