import React, { Component } from 'react';
import ReactDom from 'react-dom';

class Main extends Component {
  render() {
    return (
      <h2>Hello, this is the boilerplate for demo examples.</h2>
    );
  }
}

const app = document.getElementById('demo-app');
if (app) ReactDom.render(<Main />, app);
