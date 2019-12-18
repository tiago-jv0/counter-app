import React, { Component } from 'react';
import { Navbar } from './components/Navbar';
import Counters from './components/Counters';

export default class App extends Component {
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

    handleDecrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value--;
        this.setState({ counters });
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
            <React.Fragment>
                <Navbar totalCounters={this.state.counters.filter((counter) => counter.value > 0).length}></Navbar>
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                        onDecrement={this.handleDecrement}
                    ></Counters>
                </main>
            </React.Fragment>
        );
    }
}
