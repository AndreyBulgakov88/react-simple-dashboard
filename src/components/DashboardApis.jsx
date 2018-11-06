import _ from 'lodash';
import React from 'react';

let propsSave; 

const onApiClick = (apiId) => {
  if (typeof propsSave.onClick === 'function') {
    propsSave.onClick(apiId);
  }
}

const renderApiById = (api) => {
  return (
    <div key={api.id} className="card text-white bg-primary m-3" style={{minWidth: '350px'}}>
      <h2 className="card-header">{api.name}</h2>
      <div className="card-body">
        <p className="card-text">{api.description}</p>
        <button type="button" className="btn w-50" onClick={() => onApiClick(api.id)}>Details</button>
      </div>
      
    </div>
  );
}

const DashboardApis = (props) => {
  propsSave = props;
  return (
    <div className="d-flex flex-row">
      {_.map(props.apis, renderApiById)}
    </div>
  );
}

export default DashboardApis
