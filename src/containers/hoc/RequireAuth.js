import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object.isRequired
    };

    componentDidMount() {
      if (!this.props.authenticated) {
        this.context.router.history.push("/login");
      }
    }

    componentDidUpdate() {
      if (!this.props.authenticated) {
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
