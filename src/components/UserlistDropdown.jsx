import _ from 'lodash';
import React, { Component } from 'react';
import autoBind from 'react-autobind';

export default class UserlistDropdown extends Component {

  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    return (
      <ul>
        {_.map(this.props.userlist, this.renderUserById)}
      </ul>
    );
  }

  renderUserById(user) {
    return (
      <li key={user.id} onClick={() => this.onUserClick(user.id)} style={user.id === this.props.activeUserId ? {fontWeight: '700'} : {}}>
        {user.name}
      </li>
    );
  }

  onUserClick(userId) {
    if (userId === this.props.activeUserId) return;
    if (typeof this.props.onClick === 'function') {
      this.props.onClick(userId);
    }
  }

}
