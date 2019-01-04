import React from 'react';
import { Col, Card } from 'react-materialize';
import RowNoBottomMargin from '../common/RowNoBottomMargin';
import JustifiedText from '../common/JustifiedText';
import fake_avatar from '../../images/fake_avatar.png';
import styled from 'styled-components';

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

const FollowersUnit = (props) => (
  <Col s={12} m={4}>
    <CardCustom>
      <RowNoBottomMargin>
        <Col s={12}>
          <Avatar src={fake_avatar} className="img-resposive circle"/>
        </Col>
      </RowNoBottomMargin>
      <RowNoBottomMargin>
        <Col s={12}>
          <b className="grey-text text-darken-2">{props.name}</b>
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

export default FollowersUnit;
