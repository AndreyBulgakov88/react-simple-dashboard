import React, { Component, PropTypes } from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import DashboardApis from '../components/DashboardApis';
import * as dashboardActions from '../store/dashboard/actions';
import * as dashboardSelectors from '../store/dashboard/reducer';
import * as usersSelectors from '../store/users/reducer';

class DashboardScreen extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
    super(props);
    autoBind(this);
  }

  onApiClick(apiId) {
    this.props.dispatch(dashboardActions.selectApi(apiId));
    this.context.router.history.push(`/api/${apiId}`);
  }

  componentDidMount() {
   // this.props.dispatch(topicsActions.fetchTopics());
  }

  render() {
    return (
      <div>
        {this.props.activeUserId === undefined
        ?  
        <div>
          <h3>Please select user for view dashboard</h3>
        </div>
        :
        <div>
          <h3 className="mb-5">Click on any card for details</h3>
            <DashboardApis
              apis={this.props.apis}
              onClick={this.onApiClick} />
          </div>
        }
      </div>  
    );
  }
}

function mapStateToProps(state) {
 return {
    apis: dashboardSelectors.getApis(state),
    activeUserId: usersSelectors.getActiveUserId(state)
  };
}

export default connect(mapStateToProps)(DashboardScreen);
