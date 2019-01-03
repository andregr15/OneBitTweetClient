import React from 'react';
import { Row, Col, Card, Input, Icon } from 'react-materialize';
import styled from 'styled-components';
import RowNoBottomMargin from '../common/RowNoBottomMargin';
import fake_avatar from '../../images/fake_avatar.png';

const Avatar = styled.img`
  width:100%`
;

const EditRetweetUnit = (props) => (
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
          <Input s={12} maxLength="200" onChange={(event)=> props.handleChanged(event)}
            label="What are you thinking about this tweet?" validate className="text-red">
              <Icon>send</Icon>
            </Input>
        </RowNoBottomMargin>
      </Col>
    </RowNoBottomMargin>
  </Card>
);

export default EditRetweetUnit;