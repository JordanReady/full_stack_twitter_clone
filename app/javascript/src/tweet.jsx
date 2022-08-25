import React from 'react'
import PropTypes from 'prop-types'

function Tweet(props) {
  return (
    <React.Fragment>
        <div className="tweet border shadow-sm rounded mb-2">
            <a className="tweet-username text-decoration-none mx-1" href="#">{props.username}</a>
            <a className="tweet-screenName text-decoration-none mx-1" href="#">@{props.username}</a>
            <p className='m-1'>This is an amazing tweet</p>
            <button className="delete-tweet btn btn-outline-danger btn-sm m-1" href="#">Delete</button>
        </div>
    </React.Fragment>
  )
}
Tweet.defaultProps = {
    username: 'Jready12'
}

Tweet.propTypes = {
    username: PropTypes.string
}

export default Tweet