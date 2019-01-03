import React, { Component } from 'react';
import { Icon, Modal, Button } from 'react-materialize';
import InvisibleButton from '../../components/common/InvisibleButton';
import EditRetweetUnit from '../../components/EditRetweetUnit';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { retweet } from '../TweetListContainer/actions';

const ModalButton = styled(Button)`
  margin-left: 5px !important;
  margin-right: 4px !important;
  margin-top: 0px !important;
  width: 100px !important;  
`;

class RetweetContainer extends Component {
  body;
  constructor() {
    super();
    this.body = '';
    this.retweet = this.retweet.bind(this);
    this.handleChanged = this.handleChanged.bind(this);
  }

  retweet() {
    this.props.retweet(this.body, this.props.id);
  }

  handleChanged(event) {
    this.body = event.target.value;
    event.preventDefault();
  }

  render(){
    return (
    <Modal
      actions={
        <div>
          <ModalButton waves='light' 
            className="red lighten-2 modal-action modal-close"
            tooltip="Cancel">
            <Icon>clear</Icon>
          </ModalButton>
          <ModalButton waves='light' 
            className="blue lighten-2 modal-action modal-close" onClick={this.retweet}
            tooltip="Retweet">
            <Icon>send</Icon>
          </ModalButton>
        </div>
      }
      header='Retweet'
      trigger={
        <InvisibleButton waves='light' 
            className={this.props.tweet_original_id !== null && "blue-text"}
            tooltip="Retweet">
              <Icon>repeat</Icon>
        </InvisibleButton>}>
      <EditRetweetUnit {...this.props} handleChanged={this.handleChanged}/>
    </Modal>
    );
  };
}

function mapStateToProps(state){
  return { 
    
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ retweet }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (RetweetContainer);