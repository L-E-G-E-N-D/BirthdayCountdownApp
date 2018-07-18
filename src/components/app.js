import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="grid">
        <div>Hi</div>
        <div>Hi</div>
        <div>Hi</div>
        <div className="grid__skew-light-one">Hi</div>
        <div className="grid__skew-light-two">Hi</div>
        <div className="grid__skew-light-three-box">Hi</div>
      </div>
    );
  }
}
