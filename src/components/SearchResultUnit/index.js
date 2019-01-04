import React from 'react';
import { Tabs, Tab } from 'react-materialize';
import SearchResultUserListContainer from '../../containers/SearchResultUserListContainer';
import SearchResultTweetListContainer from '../../containers/SearchResultTweetListContainer';

const SearchUnit = () => (
  <Tabs className='tab-demo z-depth-1'>
    <Tab title="Users" active>
      <SearchResultUserListContainer />
    </Tab>
    <Tab title="Tweets">
      <SearchResultTweetListContainer/>
    </Tab>
  </Tabs>
);

export default SearchUnit;