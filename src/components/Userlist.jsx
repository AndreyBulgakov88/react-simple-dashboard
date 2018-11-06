import _ from 'lodash';
import React from 'react';
import './Userlist.css';


const renderUserById = (user) => {
  return (
    <tr key={user.id}>
      <td>{user.name}</td>
      <td>{user.about}</td>
    </tr>
  );
}

const Userlist = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>About</th>
        </tr>
        {_.map(props.userlist, renderUserById)}
      </tbody>
    </table>
  );
}

export default Userlist
