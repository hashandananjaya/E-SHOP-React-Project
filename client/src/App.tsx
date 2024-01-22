import React, { Component } from 'react';
import './App.css';
import Content from './pages/Contact';

export default class App extends Component {

  componentDidMount(): void {
      console.log('App mounted');
  }

  render(): React.ReactElement {
    return (
      <div className="App select-none">
        

        
        <Content/>
        
        
      </div>
    );
  }
  }
