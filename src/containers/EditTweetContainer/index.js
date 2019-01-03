import React, { Component } from 'react';
import EditTweetUnit from '../../components/EditTweetUnit';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateTweet } from '../TweetListContainer/actions';

class EditTweetContainer extends Component {
  body = '';
  constructor(){
    super();
    this.handleChanged = this.handleChanged.bind(this);
    this.updateTweet = this.updateTweet.bind(this);
  }

  handleChanged(event) {
    this.body = event.target.value;
  }

  updateTweet(){
    this.props.updateTweet(this.body, this.props.id);
  }

  render() {
    return(
      <EditTweetUnit {...this.props} handleChanged={this.handleChanged} updateTweet={this.updateTweet}/>
    );
  }
}

function mapStateToProps(state) {
  return {
    tweets: state.tweets
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ updateTweet }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTweetContainer);