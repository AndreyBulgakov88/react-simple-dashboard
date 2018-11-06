import _ from 'lodash';
import React from 'react';

const renderImage = (apiItemValue, apiItemIndex) => {
  return (
    <img className="img-thumbnail" style={{height: "auto", width: "auto"}} key={apiItemIndex} src={apiItemValue} alt="" />
  );
}

const DashboardApiItems = (props) => {
  return (
    <div className="d-flex flex-row flex-wrap align-items-center justify-content-center">
      {_.map(props.apiItems, renderImage)}
    </div>
  );
}

export default DashboardApiItems