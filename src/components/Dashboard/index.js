import React from 'react';
import UserInfoContainer from '../../containers/UserInfoContainer';
import TrendingTopicsContainer from '../../containers/TrendingTopicsContainer';
import MainLayout from '../MainLayout';
import { Row, Col } from 'react-materialize';
import DashboardUnit from '../DashboardUnit';

const Dashboard = () => (
  <MainLayout>
    <Row>
      <Col s={12} m={3}>
        <UserInfoContainer />
      </Col>
      <Col s={12} m={6}>
        <DashboardUnit />
      </Col>
      <Col s={12} m={3}>
        <TrendingTopicsContainer />
      </Col>
    </Row>
  </MainLayout>
);

export default Dashboard;