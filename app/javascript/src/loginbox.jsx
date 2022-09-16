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
            <div className='card p-2 mb-2 border rounded border-primary sh