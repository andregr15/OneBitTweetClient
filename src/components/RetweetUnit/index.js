import React from 'react';
import { Row, Col, Card, Icon, Dropdown, NavItem } from 'react-materialize';
import styled from 'styled-components';
import RowNoBottomMargin from '../common/RowNoBottomMargin';
import InvisibleButton from '../common/InvisibleButton';
import fake_avatar from '../../images/fake_avatar.png';
import TweetLiked from '../../containers/TweetLiked';
import TweetUnliked from '../../containers/TweetUnliked';
import RetweetContaier from '../../containers/RetweetContainer';

const Avatar = styled.img`
  width:100%`
;

const RetweetUnit = (props) => (
  <Card>
    <RowNoBottomMargin>
      <Col s={6} m={2} offset="s3">
        <Avatar src={(props.user.photo && props.user.photo.url)? props.user.photo.url : fake_avatar} className="responsive-img circle" />
      </Col>
      <Col s={12} m={10}>
        <RowNoBottomMargin>
          <Col s={10} m={10}>
            <b>{props.user.name} - {props.time}</b>
          </Col>
        </RowNoBottomMargin>
        <Row>
          <Col s={12} m={12}>
            {props.body}
          </Col> 
        </Row>
        <RowNoBottomMargin>
        
        </RowNoBottomMargin>
      </Col>
    </RowNoBottomMargin>
  </Card>
);

export default RetweetUnit;