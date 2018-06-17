import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import '../App.css';

class Home extends Component {

    render() {
        return (
            <Fragment>
                <h1>{this.props.counter}</h1>
                <button onClick={this.props.increment}> add one </button>
                <hr/>
                <button onClick={this.props.decrement}> substract one </button>
                <hr/>
                <button onClick={this.props.zeroing}> zero </button>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return { counter: state};
};

const mapDispachToProps = dispatch => {
    return {
        increment: () => dispatch({ type: 'INCREMENT'}),
        decrement: () => dispatch({ type: 'DECREMENT'}),
        zeroing: () => dispatch({ type: 'ZERO'})
    };
};

export default connect (mapStateToProps, mapDispachToProps)(Home);
