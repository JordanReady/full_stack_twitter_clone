import React from 'react'

const Tweetbox = ({handleChanges, handleSubmit, message}) => {
  return (
    <React.Fragment>
      <div className="tweet-box">
        <form onSubmit={handleSubmit}>
          <textarea onChange={handleChanges} type="text" className="form-control post-input mt-2" rows="3" placeholder="What's happening?" value={message}></textarea>
            <div className="float-end mt-1">
              <span className="post-char-counter me-1">140</span>
              <button className="btn btn-primary" id="tweet-btn">Tweet</button>
            </div>
        </form>
      </div>
    </React.Fragment>
  )
}

export default Tweetbox