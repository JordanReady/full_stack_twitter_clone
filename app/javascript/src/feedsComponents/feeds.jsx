import React from 'react'
import ReactDOM from 'react-dom'
import { Component } from 'react';
import { safeCredentials, handleErrors } from '../../utils/fetchHelper';
import Navbar from './navbar';
import ProfileCard from '../profileCard';
import TrendsCard from './trendsCard';
import Feedbox from '../feedbox';

import './feeds.scss';
import Footer from './footer';

class Feeds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      message: '',
      tweets: [],
    }
  }
  
  logOut = () => {
    fetch('/api/sessions', safeCredentials({
      method: 'DELETE',
    }))
    .then(handleErrors)
    .then(data => {
      if (data.success) {
        window.location.href = '/';
      }
      else {
        throw new Error('Unable to log out');
      }
    })
    .catch(error => {
      alert(error);
    });
  }
  
  deleteTweet = (id) => {
    fetch(`/api/tweets/${id}`, safeCredentials({
      method: 'DELETE',
    }))
    .then(handleErrors)
    .then(data => {
      if (data.success) {
        this.setState({
          tweets: this.state.tweets.filter(tweet => tweet.id !== id),
        });
      }
      else {
        throw new Error('Unable to delete tweet');
      }
    })
    .catch(error => {
      alert(error);
    });
  }

  postTweet = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    fetch('/api/tweets', safeCredentials({
      method: 'POST',
      body: JSON.stringify({
        tweet: {
          message: formData.get('message'),
        }
      })
    }))
    .then(handleErrors)
    .then(data => {
      if (data.success) {
        this.setState({
          tweets: [data.tweet, ...this.state.tweets],
          message: '',
        });
      }
      else {
        throw new Error('Unable to post tweet');
      }
    })
    .catch(error => {
      alert(error);
    });
  }

  getTweets = () => {
    fetch('/api/tweets', safeCredentials({
      method: 'GET',
    }))
    .then(handleErrors)
    .then(data => {
      if (data.success) {
        this.setState({
          tweets: data.tweets,
        });
      }
      else {
        throw new Error('Unable to get tweets');
      }
    })
    .catch(error => {
      alert(error);
    });
  }

  handleChanges = (e) => {
    const value = e.target.value;
    this.setState({message: value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.postTweet();
  }

  componentDidMount() {
    this.getTweets();
  }

  render() { 
    return (
      <React.Fragment>
        <Navbar />
        <div className="main container">
          <div className="row">
            <div className="profile-trends col-3">
              <ProfileCard />
              <TrendsCard />
            </div>
            <Feedbox />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    )
  } 
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Feeds />,
    document.body.appendChild(document.createElement('div')),
  )
})