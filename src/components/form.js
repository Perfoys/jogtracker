import React from "react";
import cancel from '../img/cancel.svg';
import "../styles/form.css";
import Jogs from "./jogs";

const URL_API = "https://jogtracker.herokuapp.com/api";

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            distance: '',
            time: '',
            date: '',
            complite: false
        }
    }

    addJog = async () => {
        const token = await localStorage.getItem('token');

        await fetch(`${URL_API}/v1/data/jog`, {
            method: 'POST',
            body: JSON.stringify({
                    date: this.state.date,
                    time: this.state.time, 
                    distance: this.state.distance
                }
            ),
            headers: {
                'Authorization': token,
                'Content-type': 'application/json'
            }
        })
            .then((response) => {
                return response.json()
            }).then((value) => {
                    this.setState({complite: true})
                },
                (error) => {console.log(error)}
            ); 
    }

    render() {
        if (this.state.complite) {
            return <Jogs />
        }
        else {
            return (
                <div className="Form-content" >
                    <div className="Form-block">
                        <div className="Form-exit">
                            <img src={cancel} className="cancel" alt="cancel" onClick={() => this.setState({complite: true})}></img>
                        </div>
                        <div className="form">
                            <div className="Form-line">
                                <span className="Form-label">Distance</span>
                                <input type="text" className="Form-input" name="distance" value={this.state.distance} 
                                onChange={(event) => {this.setState({distance: event.target.value})}}></input>
                            </div>
                            <div className="Form-line">
                                <span className="Form-label">Time</span>
                                <input type="text" className="Form-input" name="time" value={this.state.time} 
                                onChange={(event) => {this.setState({time: event.target.value})}}></input>
                            </div>
                            <div className="Form-line">
                                <span className="Form-label">Date</span>
                                <input type="text" className="Form-input" name="date" value={this.state.date} 
                                onChange={(event) => {this.setState({date: event.target.value})}}></input>
                            </div>
                            <button className="Form-button" onClick={() => this.addJog}>
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )
        }
    }
}