import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import * as appActions from '../../actions'
import { makeSelectGlobal } from './selectors';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import _ from 'lodash'
import Login from '../../components/Login'
class LoginPage extends Component {
  render() {
    console.log(this.props)
    return (
      <Login
        {...this.props} />
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(appActions, dispatch),
  };
}
const mapStateToProps = createStructuredSelector({
  systemState: makeSelectGlobal(),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
