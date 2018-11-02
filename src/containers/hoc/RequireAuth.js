import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object
    };

    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.history.push("/login");
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.history.push("/login");   
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  Authentication.propTypes = { authenticated: PropTypes.bool };

  function mapStateToProps(state) {
    return { authenticated: state.login.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}
