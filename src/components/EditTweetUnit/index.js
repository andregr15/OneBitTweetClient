import React from 'react';
import { Modal, Icon, NavItem, Button } from 'react-materialize';
import EditRetweetUnit from '../EditRetweetUnit';
import styled from 'styled-components';

const ModalButton = styled(Button)`
  margin-left: 5px !important;
  margin-right: 4px !important;
  margin-top: 0px !important;
  width: 100px !important;  
`;

const EditTweetUnit = (props) => (
  <Modal
    actions={
      <div>
        <ModalButton waves='light' 
          className="red lighten-2 modal-action modal-close"
          tooltip="Cancel">
          <Icon>clear</Icon>
        </ModalButton>
        <ModalButton waves='light' 
          className="blue lighten-2 modal-action modal-close"
          tooltip="Save" onClick={props.updateTweet}>
          <Icon>send</Icon>
        </ModalButton>
      </div>
    }
    header='Edit tweet'
    trigger={
      <NavItem>
        <span className="grey-text text-darken-2">
          Edit
        </span>
      </NavItem>}>
      <EditRetweetUnit {...props} />
  </Modal>
);

export default EditTweetUnit;