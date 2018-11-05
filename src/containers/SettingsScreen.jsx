import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as usersSelectors from '../store/users/reducer';
import * as usersActions from '../store/users/actions';
import Userlist from '../components/Userlist';

class SettingsScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      nameCreate: '',
      aboutCreate: '',
      nameEdit: this.props.activeUser === undefined ? '' : this.props.activeUser.name,
      aboutEdit: this.props.activeUser === undefined ? '' : this.props.activeUser.about
    }

    this.handleSubmitCreate = this.handleSubmitCreate.bind(this);
    this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
    this.handleNameCreateChange = this.handleNameCreateChange.bind(this);
    this.handleAboutCreateChange = this.handleAboutCreateChange.bind(this);
    this.handleNameEditChange = this.handleNameEditChange.bind(this);
    this.handleAboutEditChange = this.handleAboutEditChange.bind(this);
  }

  handleNameCreateChange(e) {
    this.setState({nameCreate: e.target.value});
  }

  handleAboutCreateChange(e) {
    this.setState({aboutCreate: e.target.value});
  }

  handleNameEditChange(e) {
    this.setState({nameEdit: e.target.value});
  }

  handleAboutEditChange(e) {
    this.setState({aboutEdit: e.target.value});
  }

  handleSubmitCreate(e) {
    e.preventDefault();

    this.props.dispatch(usersActions.createUser({id: this.props.nextUserId, name: this.state.nameCreate, about: this.state.aboutCreate}));
    this.setState({nameCreate: '', aboutCreate: ''});
  }

  handleSubmitEdit(e) {  
    e.preventDefault();

    this.props.dispatch(usersActions.editUser({id: this.props.activeUserId, name: this.state.nameEdit, about: this.state.aboutEdit}));
  }

  render() {
    return (
      <div className="col-lg-12 col-lg-offset-2 d-flex justify-content-between">
        {this.props.activeUserId !== undefined
        ?
        <div className="col-lg-4 col-lg-offset-2">
         <h2>Edit user information</h2>
          <form name="form" onSubmit={this.handleSubmitEdit}>
              <div className="form-group">
                  <label htmlFor="name">Name: </label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="name" 
                    value={this.state.nameEdit} 
                    onChange={this.handleNameEditChange}
                    required 
                  />
              </div>
              <div className="form-group">
                  <label htmlFor="about">About: </label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="about" 
                    value={this.state.aboutEdit}
                    onChange={this.handleAboutEditChange}
                  />
              </div>
              <div className="form-group">
                  <button className="btn btn-primary">Save</button>
              </div>
          </form>
        </div>
        :
        null
        }
        <div className="col-lg-4 col-lg-offset-2">
         <h2>Create user</h2>
          <form name="form" onSubmit={this.handleSubmitCreate}>
              <div className="form-group">
                  <label htmlFor="name">Name: </label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="name" 
                    value={this.state.nameCreate}
                    onChange={this.handleNameCreateChange}
                    required 
                  />
              </div>
              <div className="form-group">
                  <label htmlFor="about">About: </label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="about" 
                    value={this.state.aboutCreate}
                    onChange={this.handleAboutCreateChange}
                  />
              </div>
              <div className="form-group">
                  <button className="btn btn-primary">Create</button>
              </div>
          </form>
        </div>
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
    nextUserId: usersSelectors.getNextUserId(state),
    activeUser: usersSelectors.getActiveUser(state)
  };
}

export default connect(mapStateToProps)(SettingsScreen);
