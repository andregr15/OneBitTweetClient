import React, { Component } from 'react';
import SearchResultTweetUnit from '../../components/SearchResultTweetUnit';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class TweetListContainer extends Component {
  render() {
    var tweets_list = this.props.tweets.length ? (this.props.tweets) : []
    return (
      <div>
        {
          tweets_list.map(
            (tweet, i) => <SearchResultTweetUnit {...tweet} key={i} />
          )
        }
      </div>
    );
  }
}

function mapStateToProps(state){
  return { 
    tweets: state.tweets,
    current_user: state.current_user,
    user: state.user
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TweetListContainer);