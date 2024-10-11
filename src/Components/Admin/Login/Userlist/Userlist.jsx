
import React, { useState, useEffect } from 'react';
import './Userlist.css';
import { getUserList } from '../../../../Services/adminApi';

const Userlist = () => {
  const [userlist, setUserlist] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUserList();
        if (response.data.status) {
          setUserlist(response.data.userlist);
        } else {
          console.error('Error fetching user data:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = (userId) => {
    console.log('Delete user', userId);
  };

  return (
    <div className="user-list">
      <div className="user-list-container">
        <h2>User List</h2>
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userlist.map((user) => (
              <tr key={user._id}>
                <td className="userid">{user.username}</td>
                <td className="userid">{user.Emailaddress}</td>
                <td>
                  <div className="action-buttons">
                    <button onClick={() => handleDelete(user._id)}>BLOCK</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Userlist;
