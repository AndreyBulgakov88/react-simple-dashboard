import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class NotAuthentication extends Component {
    static contextTypes = {
      router: PropTypes.object.isRequired
    };

    componentDidMount() {
      if (this.props.authenticated) {
        this.context.router.history.push("/settings"); 
      }
    }
    
    componentDidUpdate() {
      if (this.props.authenticated) {
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
