import React from 'react';
import { Row, Col } from 'react-materialize';
import UserInfoContainer from '../../containers/UserInfoContainer';
import TweetListContainer from '../../containers/TweetListContainer';
import TrendingTopicsContainer from '../../containers/TrendingTopicsContainer';
import MainLayout from '../MainLayout';

const ProfilePage = () => (
  <MainLayout>
    <Row>
      <Col s={12} m={3}>
        <UserInfoContainer/>
      </Col>
      <Col s={12} m={6}>
        <TweetListContainer timeline={false} />
      </Col>
      <Col s={12} m={3}>
        <TrendingTopicsContainer />
      </Col>
    </Row>
  </MainLayout>
);

export default ProfilePage;