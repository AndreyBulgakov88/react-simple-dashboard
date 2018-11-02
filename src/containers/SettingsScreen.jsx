import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as usersSelectors from '../store/users/reducer';
import * as usersActions from '../store/users/actions';
import Userlist from '../components/Userlist';

class SettingsScreen extends Component {

  constructor(props) {
    super(props);

    this.nextUserId = 0;

    this.handleSubmitCreate = this.handleSubmitCreate.bind(this);
    this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
  }

  handleSubmitCreate(e) {
    e.preventDefault();
  
    this.props.dispatch(usersActions.createUser({id: this.nextUserId++, name: this.refs.name.value, about: this.refs.about.value}));
  }

  handleSubmitEdit(e) {
    e.preventDefault();
  
    this.props.dispatch(usersActions.editUser({id: this.props.activeUserId, name: this.refs.name.value, about: this.refs.about.value}));
  }

  render() {
    return (
      <div className="col-lg-12 col-lg-offset-2 d-flex justify-content-between">
        {this.props.activeUserId === undefined
        ?  
        <div className="col-lg-4 col-lg-offset-2">
         <h2>Create user</h2>
          <form name="form" onSubmit={this.handleSubmitCreate}>
              <div className="form-group">
                  <label htmlFor="name">Name: </label>
                  <input type="text" className="form-control" name="name" ref="name" required />
              </div>
              <div className="form-group">
                  <label htmlFor="about">About: </label>
                  <input type="text" className="form-control" name="about" ref="about" />
              </div>
              <div className="form-group">
                  <button className="btn btn-primary">Create</button>
              </div>
          </form>
        </div>
        :
        <div className="col-lg-4 col-lg-offset-2">
         <h2>Edit user information</h2>
          <form name="form" onSubmit={this.handleSubmitEdit}>
              <div className="form-group">
                  <label htmlFor="name">Name: </label>
                  <input type="text" className="form-control" name="name" ref="name" defaultValue={this.props.activeUser.name} required />
              </div>
              <div className="form-group">
                  <label htmlFor="about">About: </label>
                  <input type="text" className="form-control" name="about" ref="about" defaultValue={this.props.activeUser.about}/>
              </div>
              <div className="form-group">
                  <button className="btn btn-primary">Save</button>
              </div>
          </form>
        </div>
        }
        <div>
          <h3>Userlist</h3>
          <Userlist
            userlist={this.props.userlist} />
        </div>
      </div> 
    );
  }
}


function mapStateToProps(state) {
  return {
    userlist: usersSelectors.getUsers(state),
    activeUserId: usersSelectors.getActiveUserId(state),
    activeUser: usersSelectors.getActiveUser(state)
  };
}

export default connect(mapStateToProps)(SettingsScreen);
