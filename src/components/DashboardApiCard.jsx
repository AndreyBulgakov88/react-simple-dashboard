import React from 'react';

const onApiClick = (apiId, onClick) => {
  if (typeof onClick === 'function') {
    onClick(apiId);
  }
}

const DashboardApiCard = (props) => {
  return (
    <div className="card text-white bg-primary m-3" style={{minWidth: '350px'}}>
      <h2 className="card-header">{props.api.name}</h2>
      <div className="card-body">
        <p className="card-text">{props.api.description}</p>
        <button type="button" className="btn w-50" onClick={() => onApiClick(props.api.id, props.onClick)}>Details</button>
      </div>
    </div>
  );
}

export default DashboardApiCard