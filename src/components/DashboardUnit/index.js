import React from 'react';
import { Tabs, Tab } from 'react-materialize';
import FollowersContainer from '../../containers/FollowersContainer';
import FollowingsContainer from '../../containers/FollowingsContainer';
import TweetsContainer from '../../containers/TweetsContainer';

const DashboardUnit = () => (
  <Tabs className='tab-demo z-depth-1'>
    <Tab title="Followers" active>
      <FollowersContainer />
    </Tab>
    <Tab title="Followings">
      <FollowingsContainer />
    </Tab>
    <Tab title="Tweets">
      <TweetsContainer />
    </Tab>
  </Tabs>
);

export default DashboardUnit;