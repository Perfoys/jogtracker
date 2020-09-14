import React from 'react';
import '../styles/jogs.css';
import icon from '../img/icon.svg';
import add from '../img/add.svg';
import Empty from './empty';
import Form from './form';
import Filters from './filters';
import {formatDate} from '../services/service';

const URL_API = "https://jogtracker.herokuapp.com/api";

export default class Jogs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          error: null,
          isLoaded: false,
          data: [{
              distance: '',
              time: '',
              date: ''
            }
          ],
          form: false
        };
    }

    openAddDialog = () => {
        this.setState({ form: true, isLoaded: false });
    }; 

    getData = async () => {
        const token = await localStorage.getItem('token');

        fetch(`${URL_API}/v1/data/sync`, {
            method: 'GET',
            headers: {
                'Authorization': token,
                'Content-type': 'application/json'
            }
        })
            .then((response) => {
                return response.json()
            }).then(
                (body) => {
                    this.setState({
                        isLoaded: true,
                        data: body.response.jogs
                    })
                }, 
                (error) => {
                    this.setState({error});
                });
    }

    render() {
        const { error, isLoaded, data, form, isFilter } = this.state;
        if (!isLoaded) this.getData()
        if (error) {
            return <div>Ошибка: {error.message}</div>;
        }
        else if (isLoaded) {
            return (
                <div className="Jogs-content">
                    { isFilter ? <Filters /> : null}
                    { data.map((jog, i) => {
                        let date = formatDate(new Date(jog.date))
                            return (
                                <div className="Jogs-info-block">
                                    <img src={icon} className="icon" alt="icon" />
                                    <div className="info-block">
                                        <p className="date">{date}</p>
                                        <span className="speed">
                                            Speed: <span>15</span>
                                        </span>
                                        <span className="distance">
                                            Distance: <span>{jog.distance} km</span>
                                        </span>
                                        <span className="time">
                                            Time: <span>{jog.time} min</span>
                                        </span>
                                    </div>
                                <img src={add} className="Add-pic" alt="Add"  onClick={() => this.openAddDialog}></img>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }
        else if (form) {
            return <Form />
        }
        else {
            return ( <Empty />)
        }
    }
}