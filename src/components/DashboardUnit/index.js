import React from 'react';
import { Tabs, Tab } from 'react-materialize';

const DashboardUnit = () => (
  <Tabs className='tab-demo z-depth-1'>
    <Tab title="Followers" active>Test 1</Tab>
    <Tab title="Follwings">Test 2</Tab>
    <Tab title="Tweets">Test 3</Tab>
  </Tabs>
);

export default DashboardUnit;