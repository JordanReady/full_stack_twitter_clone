import React from 'react'

function Tweetbox() {
  return (
    <React.Fragment>
        <div className="tweet-box">
              <textarea type="text" className="form-control post-input mt-2" rows="3" placeholder="What's happening?"></textarea>
              <div className="float-end mt-1">
                <span className="post-char-counter me-1">140</span>
                <button className="btn btn-primary" disabled id="tweet-btn">Tweet</button>
              </div>
            </div>
    </React.Fragment>
  )
}

export default Tweetbox