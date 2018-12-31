import React from 'react';
import { Card, Input } from 'react-materialize';
import RowNoBottomMargin from '../common/RowNoBottomMargin';

const TweetNew = (props) => (
  <Card>
    <RowNoBottomMargin>
      <Input s={12} maxLength="200" 
        label="What are you thinking?" validate className="text-red"
        onKeyDown={(event)=> props.postTweet(event)}/>
    </RowNoBottomMargin>
  </Card>
);

export default TweetNew;