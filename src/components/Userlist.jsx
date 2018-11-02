import _ from 'lodash';
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import './Userlist.css';

export default class Userlist extends Component {

  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>About</th>
          </tr>
          {_.map(this.props.userlist, this.renderUserById)}
        </tbody>
      </table>
    );
  }

  renderUserById(user) {
    return (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.about}</td>
      </tr>
    );
  }

}
