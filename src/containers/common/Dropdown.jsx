import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Dropdown.css';
import * as dashboardActions from '../../store/dashboard/actions';
import * as usersActions from '../../store/users/actions';
import * as usersSelectors from '../../store/users/reducer';
import UserlistDropdown from '../../components/UserlistDropdown';

class Dropdown extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.state = { displayMenu: false };
  }

  showDropdownMenu = (e) => {
    e.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu = () => {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  }

  onDropdownItemClick = (userId) => {
    this.props.dispatch(dashboardActions.shuffleApis());
    this.props.dispatch(usersActions.selectUser(userId));
    this.context.router.history.push("/");
  }

  render() {
    return (
      <div  className="dropdown mr-3" style={{}} >
        <div className="button" onClick={this.showDropdownMenu}>
          {this.props.activeUserId === undefined ? '<Select user>' : this.props.userlist[this.props.activeUserId].name}
        </div>
        { this.state.displayMenu 
          ? 
          <UserlistDropdown
            userlist={this.props.userlist} 
            activeUserId={this.props.activeUserId}
            onClick={this.onDropdownItemClick} 
          />
          :
          null
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    userlist: usersSelectors.getUsers(state),
    activeUserId: usersSelectors.getActiveUserId(state)
  };
}

export default connect(mapStateToProps, null, null, {pure: false})(Dropdown);