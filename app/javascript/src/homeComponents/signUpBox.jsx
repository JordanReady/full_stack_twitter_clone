import React from 'react'
import { safeCredentials, handleErrors } from '../utils/fetchHelper';

class SignUpBox extends React.Component {
    constructor(props) {
        super();
        this.state = {
            email:'',
            username:'',
            password: '',
        }
    }

    handleChanges = (e) => {
        const value = e.target.value;
        switch (e.target.id) {
            case 'email':
                this.setState({email: value});
                break;
            case 'username':
                this.setState({username: value});
                break;
            case 'password':
                this.setState({password: value});
                break;
        }
    }

    createSession = (username, password) => {
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

    handleSubmit = (e) => {
        e.preventDefault();
        const { email, username, password } = this.state;
        fetch('/api/users', safeCredentials({
            method: 'POST',
            body: JSON.stringify({
            user: {
                email,
                username,
                password,
            }
            })
        }))
        .then(handleErrors)
        .then(data => {
            if (data.success) {
                this.createSession(username, password);
            }
            else {
                throw new Error('Invalid username or password');
            }
        })
        .catch(error => {
            alert(error);
        });
    }

    render() {
        return (
        <React.Fragment>
            <div className='card p-2 shadow mt-5 border border-primary'>
                <div className='sign-in-title card-title'><h4>Sign up Here</h4></div>
                <form id='signup-form'onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input type="text" value={this.state.username} className="form-control username mb-2 border border-primary" placeholder="Username"/>
                </div>
                <div className="form-group col-xs-8">
                    <input type="email" value={this.state.email} className="form-control password my-2 border border-primary" placeholder="Email"/>
                </div>
                <div className="form-group col-xs-8">
                    <input type="password" value={this.state.password} className="form-control password my-2 border border-primary" placeholder="Password"/>
                </div>
                <button id="sign-in-btn" className="btn btn-default btn-primary col-xs-3">Sign up</button>
                </form>
            </div>
        </React.Fragment>
        )
    }
}

export default SignUpBox;