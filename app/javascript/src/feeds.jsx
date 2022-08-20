import React from 'react'
import ReactDOM from 'react-dom'

import './feeds.scss';


const Feeds = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              <svg className='text-primary' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
              </svg>
            </a>
          </div>
          <div className="search-bar col-xs-3 nav ms-auto justify-content-end">
            <div className="input-group">
              <input type="text" className="form-control search-input" placeholder="Search for..."/>
              <span className="input-group-btn">
                <button className="btn btn-default search-btn btn-primary" type="button">Go!</button>
              </span>
            </div>
          </div>
          <ul className="nav navbar-nav ms-2">
            <li className="dropdown">
              <a href="#" className="dropdown-toggle text-decoration-none" data-toggle="dropdown" role="button" aria-expanded="false"><span id="user-icon" className=''>User</span></a>
              <ul className="dropdown-menu row" role="menu">
                <li ><a href="#" className="username">User</a></li>
                <li role="presentation" className="divider"></li>
                <li ><a href="#">Lists</a></li>
                <li role="presentation" className="divider"></li>
                <li ><a href="#">Help</a></li>
                <li ><a href="#">Keyboard shortcuts</a></li>
                <li role="presentation" className="divider"></li>
                <li ><a href="#">Settings</a></li>
                <li ><a id="log-out" href="#">Log out</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      <div className="main container">
        <div className="row">
          <div className="profile-trends col-3">
            <div className="profileCard border border-primary rounded shadow">
              <div className="profileCard-content">
                <div className="user-field">
                  <a className="username text-decoration-none ps-2 text-muted fw-bold" href="#">User</a>
                  <br/>
                  <a className="screenName text-decoration-none ps-2 text-muted" href="#">@User</a>
                </div>
                <div className="user-stats row m-0">
                  <div className="col-3 d-flex justify-content-around ms-1">
                    <a href="" className='text-decoration-none text-muted'>
                      <span>Tweets<br/></span>
                      <span className="user-stats-tweets">10</span>
                    </a>
                  </div>
                  <div className="col-4 d-flex justify-content-around">
                    <a href="" className='text-decoration-none text-muted'>
                      <span>Following<br/></span>
                      <span className="user-stats-following">0</span>
                    </a>
                  </div>
                  <div className="col-4 d-flex justify-content-around">
                    <a href="" className='text-decoration-none text-muted ps-1'>
                      <span>Followers<br/></span>
                      <span className="user-stats-followers">0</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="trends border border-primary rounded my-3 shadow">
              <div className="">
                <div className="text-muted ms-2">
                  <span className='fw-bold'>Trends</span>
                </div>
                <ul className="list-group">
                  <li><a href="#" className='text-decoration-none ms-2'>#Bootstrap</a></li>
                  <li><a href="#" className='text-decoration-none ms-2'>#Ruby</a></li>
                  <li><a href="#" className='text-decoration-none ms-2'>#foobarbaz</a></li>
                  <li><a href="#" className='text-decoration-none ms-2'>#rails</a></li>
                  <li><a href="#" className='text-decoration-none ms-2'>#API</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-9 feed-box border border-primary rounded shadow">
            <div className="post-tweet-box">
              <textarea type="text" className="form-control post-input mt-2" rows="3" placeholder="What's happening?"></textarea>
              <div className="float-end mt-1">
                <span className="post-char-counter me-1">140</span>
                <button className="btn btn-primary" disabled id="post-tweet-btn">Tweet</button>
              </div>
            </div>
            <div className="feed mt-5">
              <div className="tweet border shadow-sm rounded mb-2">
                <a className="tweet-username" href="#">User</a>
                <a className="tweet-screenName" href="#">@User</a>
                <p>This is an amazing tweet</p>
                <a className="delete-tweet" href="#">Delete</a>
              </div>
              <div className="tweet border shadow-sm rounded mb-2">
                <a className="tweet-username" href="#">User</a>
                <a className="tweet-screenName" href="#">@User</a>
                <p>This is an amazing tweet</p>
              </div>
              <div className="tweet border shadow-sm rounded mb-2">
                <a className="tweet-username" href="#">User</a>
                <a className="tweet-screenName" href="#">@User</a>
                <p>This is an amazing tweet</p>
              </div>
            </div>
          </div>
          <div className="col-xs-3 follow-suggest"></div>
        </div>
      </div>
    </React.Fragment>
  )

}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Feeds />,
    document.body.appendChild(document.createElement('div')),
  )
})