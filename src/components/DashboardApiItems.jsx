import _ from 'lodash';
import React, { Component } from 'react';
import autoBind from 'react-autobind';

export default class DashboardApiItems extends Component {

  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    return (
      <div className="d-flex flex-row flex-wrap align-items-center justify-content-center">
        {_.map(this.props.apiItems, this.renderImage)}
      </div>
    );
  }

  renderImage(apiItemValue, apiItemIndex) {
    return (
      <img className="img-thumbnail" style={{height: "auto", width: "auto"}} key={apiItemIndex} src={apiItemValue} alt="" />
    );
  }

}
