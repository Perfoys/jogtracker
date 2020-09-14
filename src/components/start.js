import React from 'react';
import '../styles/start.css';
import bear from '../img/bear-face.svg';
import Jogs from "./jogs";

const URL_API = "https://jogtracker.herokuapp.com/api";

export default class Start extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false
        };
      }

    getToken = async () => {
        await fetch(`${URL_API}/v1/auth/uuidLogin`, {
            method: 'POST',
            body: JSON.stringify({
                    uuid: 'hello'
                }
            ),
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then((response) => {
                return response.json()
            }).then(
                (value) => {
                    localStorage.setItem('token', `Bearer ${value.response.access_token}`);
                    this.setState({
                        isLoaded: true
                    });   
            },
                (error) => {
                    this.setState({
                        error
                    });
                });
    }

    render() {
        const { error, isLoaded } = this.state;
        if (error) {
            return <div>Ошибка: {error.message}</div>;
        }
        else if (isLoaded) {
            return <Jogs />
        }
        else {
            return (
                <div className="Start-content">
                    <div className="Container">
                        <img src={bear} className="bearface" alt="Bear face"></img>
                        <button className="Letme-button" onClick={this.getToken}>Let me in</button>
                    </div>
                </div>
            )
        }
    }
}