import React from "react";
import logo from '../img/logo.svg';
import filteractive from '../img/filter-active.svg';
import filter from '../img/filter.svg';
import menu from '../img/menu.svg';
import "../styles/header.css";

export default class Header extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isFilter: false
        }
    }

    switchFilter = async () => {
        if (this.state.isFilter) 
            this.setState({isFilter: false})
        else 
            this.setState({isFilter: true})
    } 

    render() {
        return (
            <header className="Header">
                <div className="Header-wrap">
                    <img src={logo} className="logo" alt="logo"/>
                    <div className="Header-menu">
                        <nav>
                            <a className="Header-link" href="#" target="_self"> JOGS </a>
                            <a className="Header-link" href="#" target="_self"> INFO </a>
                            <a className="Header-link" href="#" target="_self"> CONTACT US </a>
                        </nav>
                        <div className="Header-filter" onClick={this.switchFilter}>
                            <img src={ this.state.isFilter ? filteractive : filter} className="filter" />
                        </div>
                    </div>
                    <div className="burger-menu">
                        <img src={menu} className="burger-img" alt="burger-icon" />
                    </div>
                </div>
            </header>
        )
    }
}