import React from 'react';
import { Row, Col, Card } from 'react-materialize';
import styled from 'styled-components';
import RowNoBottomMargin from '../common/RowNoBottomMargin';
import fake_avatar from '../../images/fake_avatar.png';
import TweetLiked from '../../containers/TweetLiked';
import TweetUnliked from '../../containers/TweetUnliked';
import RetweetContainer from '../../containers/RetweetContainer';
import RetweetUnit from '../RetweetUnit';
import Link from 'react-router-dom/Link';

const Avatar = styled.img`
  width:100%`
;

const SearchResultTweetUnit = (props) => (
  <Card>
    <RowNoBottomMargin>
      <Col s={6} m={2} offset="s3">
        <Link to={`/user/${props.user.id}`}>
          <Avatar src={(props.user.photo && props.user.photo.url)? props.user.photo.url : fake_avatar} className="responsive-img circle" />
        </Link>
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

export default SearchResultTweetUnit;