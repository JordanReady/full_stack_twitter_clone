import React from 'react'
import { safeCredentials, handleErrors } from '../utils/fetchHelper';
import 'bootstrap/dist/css/bootstrap.min.css';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      isOpen: false
    };

    this.getUsername = this.getUsername.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
  }
   
  componentDidMount() {
    this.getUsername();
  }

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

  getUsername() {
    fetch('/api/authenticated', safeCredentials({
      method: 'GET',
    }))
    .then(handleErrors)
    .then(data => {
      this.setState({ 
        username: data.username });
    })
  }

  render () {
    const { username } = this.state;
    return (
      <React.Fragment>
      <nav className="navbar navbar-default navbar-fixed-top shadow-sm mb-3">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">
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
                <a href="#" onClick={this.toggleOpen} className="dropdown-toggle text-decoration-none" data-toggle="dropdown" role="button" aria-expanded="false"><span id="{props.username}-icon" className=''>{username}</span></a>
                <ul className="dropdown-menu row" role="menu">
                  <li ><a href="#" className="username">{username}</a></li>
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
      
      </React.Fragment>
    )
  }
}

export default Navbar