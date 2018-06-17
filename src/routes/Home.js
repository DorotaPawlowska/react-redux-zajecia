import React, { Component, Fragment } from 'react';
import '../App.css';

class Home extends Component {

    state = {
        counter: 0,
    };

    handleCounterPlus = () => {
        this.setState({
            counter: this.state.counter + 1,
        });
    };

    handleCounterMinus = () => {
        this.setState({
            counter: this.state.counter - 1,
        });
    };


    render() {
        return (
            <Fragment>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleCounterPlus}> add one </button>
                <hr/>
                <button onClick={this.handleCounterMinus}> substract one </button>
            </Fragment>
        );
    }
}

export default Home;
