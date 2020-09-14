import React from 'react';
import '../styles/empty.css';
import sad from '../img/sad-rounded-square-emoticon.svg';

export default class Empty extends React.Component {
    render() {
        return (
            <div className="Empty-content">
                <div>
                    <img src={sad} className="Sad" alt="Sad face" />
                    <div className="nothing">Nothing is there</div>
                </div>
                <div>
                    <button className="create-button">Create your jog first</button>
                </div>
            </div>
        )
    }
}