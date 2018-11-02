import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class NotAuthentication extends Component {
    static contextTypes = {
      router: PropTypes.object
    };

    componentWillMount() {
      if (this.props.authenticated) {
        this.context.router.history.push("/settings"); 
      }
    }

    componentWillUpdate(nextProps) {
      if (nextProps.authenticated) {
        this.context.router.history.push("/settings"); 
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  NotAuthentication.propTypes = { authenticated: PropTypes.bool };

  function mapStateToProps(state) {
    return { authenticated: state.login.authenticated };
  }

  return connect(mapStateToProps)(NotAuthentication);
}
