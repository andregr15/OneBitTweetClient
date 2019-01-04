import React, { Component } from 'react';
import Header from '../../components/Header';
import { logOut } from '../Auth/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { search } from './actions';

class HeaderContainer extends Component {
  render() {
    return (
      <div>
        <Header {...this.props.current_user} 
          logOut={this.props.logOut} 
          search={this.props.search}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { current_user: state.current_user }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logOut, search }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);