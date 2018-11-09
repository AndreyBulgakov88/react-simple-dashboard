import _ from 'lodash';
import React from 'react';
import './Userlist.css';
import UserRow from './UserRow';

const Userlist = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>About</th>
        </tr>
        {_.map(props.userlist, (user) => (
            <UserRow key={user.id} user={user}/>
          ))
        }
      </tbody>
    </table>
  );
}

export default Userlist
