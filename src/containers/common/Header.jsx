import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as loginActions from '../../store/login/actions';
import './Header.css';
import Dropdown from './Dropdown';
import { NavLink } from 'react-router-dom'

class Header extends Component {
  
  constructor(props) {
    super(props);

    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLogoutClick() {
    this.props.dispatch(loginActions.logoutUser());
  }

  render() {
    const style = !this.props.authenticated ? {display: 'none'} : {};

    return (
        <nav className="navbar navbar-dark bg-dark justify-content-end">
          <h3 className="header-app">React simple dashboard</h3>
          <div className="navbar-nav d-flex flex-row mr-3">
            <NavLink exact to="/" style={style} className="nav-item nav-link px-2" activeClassName='active'>Dashboard</NavLink>
            <NavLink exact to="/settings" style={style} className="nav-item nav-link px-3" activeClassName='active'>Settings</NavLink>
          </div>
         
          <div style={style}>
            <Dropdown />
          </div>
          
          <button type="button" className="btn btn-primary" style={style} onClick={this.handleLogoutClick}>Logout</button>       
        </nav>
    )
  }
}

function mapStateToProps(state) {
  return { authenticated: state.login.authenticated, usersCount: state.users.userlist.length};
}

export default connect(mapStateToProps, null, null, {pure: false})(Header);