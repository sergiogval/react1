import React, { Component } from 'react';
const Greeting = props => <p>Hello {props.name}!</p>;

class App extends Component {

render() {
    return (
        <div>
            <h1>My App</h1>
            <br />
            <Greeting name="User" />
        </div>
    )
}}

export default App;