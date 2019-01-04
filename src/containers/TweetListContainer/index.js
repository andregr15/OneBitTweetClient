import React, { Component } from 'react';
import TweetUnit from '../../components/TweetUnit';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteTweet, createTweet, getTweets } from './actions.js';
import TweetNew from '../../components/TweetNew';

let page = 0;
class TweetListContainer extends Component {
  constructor() {
    super();
    this.deleteTweet = this.deleteTweet.bind(this);
    this.postTweet = this.postTweet.bind(this);
  }

  deleteTweet(id) {
    this.props.deleteTweet(id);
  }

  postTweet(event){
    if(event.keyCode === 13) { // is enter key?
      this.props.createTweet(event.target.value);
      event.target.value = "";
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if((document.body.scrollHeight - document.body.offsetHeight) === (window.scrollY)) {
      page += 1;
      this.props.getTweets(this.props.timeline, page, this.props.current_user.id);
    }
  };

  render() {
    var tweets_list = this.props.tweets.length ? (this.props.tweets) : []
    return (
      <div>
        {
          this.props.current_user.id === this.props.user.id &&
          <TweetNew postTweet={this.postTweet}/>
        }
        {
          tweets_list.map(
            (tweet, i) => <TweetUnit {...tweet} key={i}  
                              deleteTweet={this.deleteTweet} 
                              current_user={this.props.current_user}/>
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
  return bindActionCreators({ deleteTweet, createTweet, getTweets }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TweetListContainer);