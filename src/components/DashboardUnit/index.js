import React from 'react';
import { Tabs, Tab } from 'react-materialize';
import FollowersContainer from '../../containers/FollowersContainer';
import FollowingsContainer from '../../containers/FollowingsContainer';
import TweetListContainer from '../../containers/TweetListContainer';

const DashboardUnit = () => (
  <Tabs className='tab-demo z-depth-1'>
    <Tab title="Followers" active>
      <FollowersContainer />
    </Tab>
    <Tab title="Followings">
      <FollowingsContainer />
    </Tab>
    <Tab title="Tweets">
      <TweetListContainer/>
    </Tab>
  </Tabs>
);

export default DashboardUnit;