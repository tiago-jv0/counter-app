import React, { Component } from 'react';
import Counter from './Counter';
export default class Counters extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { counters, onDelete, onIncrement, onReset, onDecrement } = this.props;

        return (
            <div>
                <button onClick={onReset} className="btn btn-primary btn-sm m-3">
                    Reset
                </button>
                {counters.map((counter) => (
                    <Counter
                        onDecrement={onDecrement}
                        onIncrement={onIncrement}
                        onDelete={onDelete}
                        key={counter.id}
                        counter={counter}
                    ></Counter>
                ))}
            </div>
        );
    }
}
