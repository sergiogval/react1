import React, { Component } from 'react';
const Greeting = props => <p>Hello {props.name}!</p>;

class App extends Component {
    constructor(props) {
        super(props);
        this.title = 'Sergio React App';
}



render() {
    return (
        <div>
            <h1>{this.title}</h1>
            <br />
            <Greeting name="Guys!" />
        </div>
    )
}}

export default App;