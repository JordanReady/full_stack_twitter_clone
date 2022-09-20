import React from 'react'
import PropTypes from 'prop-types'
import { safeCredentials, handleErrors } from '../../utils/fetchHelper'


function Tweet (props) {
    fetch(`/api/users/${props.username}/tweets`, safeCredentials({
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }))
      .then(handleErrors)
      .then(data => {
        this.setState({
          username: data.username,
          tweets: data.tweets,
        })
      })
      .catch(error => {
        console.log(error);
      })

    
    const deleteTweet = (e) => {
      e.preventDefault();
      console.log('delete tweet');
      fetch(`/api/tweets/${this.state.id}`, safeCredentials({
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }))
        .then(handleErrors)
        .then(data => {
          this.setState({
            content: data.content,
            created_at: data.created_at,
            id: data.id,
          });
        })
        .catch(error => {
          console.log(error)
        });
    }

    return (
      <React.Fragment>
        <div className="tweet border border-primary rounded shadow mb-3">
          <div className="tweet-content">
            <div className="user-field">
              <a className="username text-decoration-none ps-2 text-muted fw-bold" href="#">{props.username}</a>
              <br />
              <a className="screenName text-decoration-none ps-2 text-muted" href="#">@{props.username}</a>
            </div>
            <div className="tweet-field">
              <p className="tweet-content ps-2">{props.content}</p>
            </div>
            <div className='delete-button btn btn-outline-danger' onClick={() => deleteTweet()}>Delete</div>
          </div>
        </div>
      </React.Fragment>
    ); 
}


Tweet.propTypes = {
  username: PropTypes.string,
  content: PropTypes.string,
}



Tweet.defaultProps = {
    username: 'Jready12'
}

Tweet.propTypes = {
    username: PropTypes.string
}

export default Tweet
