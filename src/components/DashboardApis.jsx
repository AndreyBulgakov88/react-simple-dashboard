import _ from 'lodash';
import React, { Component } from 'react';
import autoBind from 'react-autobind';

export default class DashboardApis extends Component {

  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    return (
      <div className="d-flex flex-row">
        {_.map(this.props.apis, this.renderApiById)}
      </div>
    );
  }

  renderApiById(api) {
    return (
      <div key={api.id} className="card text-white bg-primary m-3" style={{minWidth: '350px'}}>
        <h2 className="card-header">{api.name}</h2>
        <div className="card-body">
          <p className="card-text">{api.description}</p>
          <button type="button" className="btn w-50" onClick={() => this.onApiClick(api.id)}>Details</button>
        </div>
        
      </div>
    );
  }

  onApiClick(userId) {
    if (typeof this.props.onClick === 'function') {
      this.props.onClick(userId);
    }
  }

}
