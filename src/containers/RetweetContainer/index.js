import React, { Component } from 'react';
import { Icon, Modal, Button, Col, Row } from 'react-materialize';
import InvisibleButton from '../../components/common/InvisibleButton';
import RetweetUnit from '../../components/RetweetUnit';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

const ModalButton = styled(Button)`
  margin-left: 5px !important;
  margin-right: 4px !important;
  margin-top: 0px !important;
  width: 100px !important;  
`;

class RetweetContainer extends Component {
  constructor() {
    super();
    this.retweet = this.retweet.bind(this);
  }

  retweet() {
    console.log(this.props);
  }

  render(){
    return (
    <Modal
      actions={
        <div>
          <ModalButton waves='light' className="blue lighten-2 modal-action modal-close">No</ModalButton>
          <ModalButton waves='light' className="blue lighten-2 modal-action modal-close" onClick={this.retweet}>Yes</ModalButton>
        </div>
      }
      header='Retweet'
      trigger={<InvisibleButton waves='light'><Icon right>repeat</Icon></InvisibleButton>}>
      <RetweetUnit {...this.props}/>
    </Modal>
    );
  };
}

function mapStateToProps(state){
  return { 
    
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (RetweetContainer);