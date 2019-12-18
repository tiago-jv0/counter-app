import React, { Component } from 'react';
import Counter from './Counter';
export default class Counters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counters: [
                { id: 1, value: 0 },
                { id: 2, value: 0 },
                { id: 3, value: 0 },
                { id: 4, value: 0 },
            ],
        };
    }

    handleDelete = (id) => {
        this.setState({
            counters: this.state.counters.filter((counter) => counter.id !== id),
        });
    };

    handleReset = () => {
        this.setState({
            counters: this.state.counters.map((counter) => {
                counter.value = 0;
                return counter;
            }),
        });
    };

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
    };
    render() {
        return (
            <div>
                <button onClick={this.handleReset} className="btn btn-primary btn-sm">
                    Reset
                </button>
                {this.state.counters.map((counter) => (
                    <Counter
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                        key={counter.id}
                        counter={counter}
                    ></Counter>
                ))}
            </div>
        );
    }
}
