import React from 'react';

const UserRow = (props) => {
  return (
    <tr>
      <td>{props.user.name}</td>
      <td>{props.user.about}</td>
    </tr>
  );
}

export default UserRow;