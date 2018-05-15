import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login'

export default class Facebook extends Component {
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    }

    componentClicked =() => console.log('clicked');

    responseFacebook = (responce) => {
        this.setState({
            isLoggedIn: true,
            userID: responce.userID,
            name: responce.name,
            email: responce.email,
            picture: responce.picture.data.url
        })
    } 

    render() {
        let fbContent;

        if (this.state.isLoggedIn) {
            fbContent = (
                <div style={{
                    width: '400px',
                    margin: 'auto',
                    background: '#f4f4f4',
                    padding: '20px'
                }}>
                    <img src={this.state.picture} alt={this.state.name}/>
                    <h2>Hello {this.state.name}</h2>
                    <h4>Email: {this.state.email}</h4>
                </div>
            );
        } else {
            fbContent=(
            <FacebookLogin
                appId="619923775043770"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} /> )
        }


        return (
            <div>
                {fbContent}
            </div>
        )
    }
}
