import React, { Component } from 'react';
import SearchResult from '../../components/SearchResult';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/lib/connect/connect';

class SearchResultContainer extends Component {
  render(){
    return(
      <SearchResult />
    )
  }
}

function mapStateToProps(state) {
  return {
    current_user: state.current_user,
    tweets: state.tweets
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (SearchResultContainer);