import _ from 'lodash';
import React from 'react';

let propsSave;

const onUserClick = (userId) => {
  if (userId === propsSave.activeUserId) return;
  if (typeof propsSave.onClick === 'function') {
    propsSave.onClick(userId);
  }
}

const renderUserById = (user) => {
  return (
    <li 
      key={user.id} 
      onClick={() => onUserClick(user.id)} 
      style={user.id === propsSave.activeUserId 
            ? 
            {fontWeight: '700'} 
            : 
            {}}
    >
      {user.name}
    </li>
  );
}

const UserlistDropdown = (props) => {
  propsSave = props;
  return (
    <ul>
      {_.map(props.userlist, renderUserById)}
    </ul>
  );
}

export default UserlistDropdown
