import React from 'react';
import UserInfoContainer from '../../containers/UserInfoContainer';
import TrendingTopicsContainer from '../../containers/TrendingTopicsContainer';
import MainLayout from '../MainLayout';
import { Row, Col } from 'react-materialize';
import SearchResultUnit from '../SearchResultUnit';

const SearchResult = () => (
  <MainLayout>
    <Row>
      <Col s={12} m={3}>
        <UserInfoContainer />
      </Col>
      <Col s={12} m={6}>
        <SearchResultUnit />
      </Col>
      <Col s={12} m={3}>
        <TrendingTopicsContainer />
      </Col>
    </Row>
  </MainLayout>
);

export default SearchResult;