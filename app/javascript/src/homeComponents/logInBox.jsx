import React, {Component} from 'react';
import {safeCredentials, handleErrors } from '../utils/fetchHelper';

class LoginBox extends Component {
    constructor(props) {
        super();
        this.state = {
            username: '',
            password: '',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = this.state;
        fetch('/api/sessions', safeCredentials({
            method: 'POST',
            body: JSON.stringify({
            user: {
                username,
                password,
            }
            })
        }))
        .then(handleErrors)
        .then(data => {
            if (data.success) {
                window.location.href = '/feeds';
            }
            else {
                throw new Error('Invalid username or password');
            }
        })
        .catch(error => {
            alert(error);
        });
    }

    handleChanges = (e) => {
        const value = e.target.value;
        switch (e.target.id) {
            case 'username':
                this.setState({username: value});
                break;
            case 'password':
                this.setState({password: value});
                break;
        }
    }

    render() {
        return (
        <React.Fragment>
            <div className='card p-2 mb-2 border rounded border-primary shadow'>
              <div className='log-in-title card-title'><h4>Login Here</h4></div>
              <form id='login-form'>
                <div className="form-group">
                  <input type="text" className="form-control username mb-2 border border-primary" placeholder="Username"/>
                </div>
                <div className="form-group col-xs-8">
                  <input type="password" className="form-control password my-2 border border-primary" placeholder="Password"/>
                </div>
                <button id="log-in-btn" className="btn btn-default btn-primary col-xs-3 float-right">Log in</button>
              </form>
            </div>
        </React.Fragment> 
        );
    }
}


export default LoginBox;