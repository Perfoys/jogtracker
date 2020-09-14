import React from 'react';
import './App.css';

import Start from "./components/start";
import Header from "./components/header";
import Info from "./components/info";
import Form from "./components/form";
import Jogs from "./components/jogs";
import Empty from "./components/empty";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Start />
      </div>
    )
  };
}
