import _ from 'lodash';
import React from 'react';
import DashboardApiCard from './DashboardApiCard';

const DashboardApis = (props) => {
  return (
    <div className="d-flex flex-row">
      {_.map(props.apis, (api) => (
        <div key={api.id}>
            <DashboardApiCard api={api} onClick={props.onClick}/>
          </div>
        ))
      }
    </div>
  );
}

export default DashboardApis
