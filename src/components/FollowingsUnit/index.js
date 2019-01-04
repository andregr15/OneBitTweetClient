import React from 'react';
import { Col, Card, Icon } from 'react-materialize';
import RowNoBottomMargin from '../common/RowNoBottomMargin';
import InvisibleButton from '../common/InvisibleButton';
import JustifiedText from '../common/JustifiedText';
import fake_avatar from '../../images/fake_avatar.png';
import styled from 'styled-components';
import Link from 'react-router-dom/Link';

const Avatar = styled.img`
  height: 70px;
  width: 70px;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const CardCustom = styled(Card)`
  .card-content {
    background: linear-gradient(
      to bottom, 
      #616161 0%,
      #616161 50%,
      #000 50%,
      white 50%,
      white 100%
    )
  }
`;

const FollowingsUnit = (props) => (
  <Col s={12} m={4}>
    <CardCustom>
      <RowNoBottomMargin>
        <Col s={12}>
          <Link to={`/user/${props.id}`}>
            <Avatar src={ (props.photo && props.photo.url)? props.photo.url : fake_avatar } className="responsive-img circle m10"/>
          </Link>
        </Col>
      </RowNoBottomMargin>
      <RowNoBottomMargin>
        <Col s={10}>
        <Link to={`/user/${props.id}`}>
            <b className="grey-text text-darken-2">{props.name}</b>
          </Link>
        </Col>
        <Col s={2}>
          <InvisibleButton onClick={() => props.unfollow(props.id)}>
            <Icon className="red-text" tooltip="Unfollow">clear</Icon>
          </InvisibleButton>
        </Col>
      </RowNoBottomMargin>
      <RowNoBottomMargin>
        <Col s={12}>
          <JustifiedText>
            {props.description}
          </JustifiedText>
        </Col>
      </RowNoBottomMargin>
    </CardCustom>
  </Col>
)

export default FollowingsUnit;
