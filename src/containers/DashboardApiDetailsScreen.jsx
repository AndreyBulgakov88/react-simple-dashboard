import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import * as dashboardActions from '../store/dashboard/actions';
import * as dashboardSelectors from '../store/dashboard/reducer';
import DashboardApiItems from '../components/DashboardApiItems';

class DashboardApiDetailsScreen extends Component {

  constructor(props) {
    super(props);
    autoBind(this);
  }

  componentDidMount() {
    this.props.dispatch(dashboardActions.clearApiItems());
    this.props.dispatch(dashboardActions.fetchApiItems(this.props.selectedApi.id));
  }

  render() {
    if (!this.props.apiItems) return this.renderLoading();
    return (
      <div>
        <h3 className="text-center mb-5">{this.props.selectedApi.name}</h3>
        <DashboardApiItems 
        apiItems={this.props.apiItems}/>
      </div>
    );
  }

  renderLoading() {
    return (
      <p>Loading...</p>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    selectedApi: dashboardSelectors.getApiById(state, ownProps.match.params.apiId),
    apiItems: dashboardSelectors.getApiItems(state)
  };
}

export default connect(mapStateToProps)(DashboardApiDetailsScreen);
