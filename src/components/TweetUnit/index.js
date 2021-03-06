import React from 'react';
import { Row, Col, Card, Icon, Dropdown, NavItem } from 'react-materialize';
import styled from 'styled-components';
import RowNoBottomMargin from '../common/RowNoBottomMargin';
import InvisibleButton from '../common/InvisibleButton';
import fake_avatar from '../../images/fake_avatar.png';
import TweetLiked from '../../containers/TweetLiked';
import TweetUnliked from '../../containers/TweetUnliked';
import RetweetContainer from '../../containers/RetweetContainer';
import RetweetUnit from '../RetweetUnit';
import EditTweetContainer from '../../containers/EditTweetContainer';

const Avatar = styled.img`
  width:100%`
;

const TweetUnit = (props) => (
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
          <Col s={2} m={2} className="right-align">
          { props.current_user.id === props.user.id &&
            <Dropdown trigger={
              <InvisibleButton>
                <Icon>expand_more</Icon>
              </InvisibleButton>
            }>
              <EditTweetContainer {...props}/>
              <NavItem onClick={() => props.deleteTweet(props.id)}>
                <span className="grey-text text-darken-2">Remove</span>
              </NavItem>
            </Dropdown>
          }
          </Col>
        </RowNoBottomMargin>
        <Row>
          <Col s={12} m={12}>
            {props.body}
          </Col> 
        </Row>
        { props.tweet_original_id !== null && <RetweetUnit {...props.tweet_original}/> }
        <RowNoBottomMargin>
          <Col s={1} m={1}>
            { props.liked? <TweetLiked id={props.id}/> : <TweetUnliked id={props.id}/> }
          </Col>
          <Col s={1} m={1}>
            <RetweetContainer {...props}/>
          </Col>
        </RowNoBottomMargin>
      </Col>
    </RowNoBottomMargin>
  </Card>
);

export default TweetUnit;