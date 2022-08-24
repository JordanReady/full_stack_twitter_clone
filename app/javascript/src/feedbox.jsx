import React from 'react'
import Tweet from './tweet'
import Tweetbox from './tweetbox'

function Feedbox() {
  return (
    <React.Fragment>
        <div className="col-9 feed-box border border-primary rounded shadow">
            <Tweetbox />
            <div className="feed mt-5">
              <Tweet />
              <Tweet />
              <Tweet />
              <Tweet />
              <Tweet />
              <Tweet />
              <Tweet />
              <Tweet />
              <Tweet />
            </div>
          </div>
    </React.Fragment>
  )
}

export default Feedbox