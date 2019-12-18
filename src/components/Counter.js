import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { counter, onDelete, onIncrement } = this.props;

        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formartValue()}</span>
                <button onClick={() => onIncrement(counter)} className="btn btn-secondary btn-sm">
                    Increment
                </button>
                <button onClick={() => onDelete(counter.id)} className="btn btn-danger btn-sm m-3">
                    Delete
                </button>
            </div>
        );
    }

    getBadgeClasses() {
        const { value } = this.props.counter;
        let classes = 'badge m-3 badge-';
        classes += value === 0 ? 'warning' : 'primary';
        return classes;
    }

    formartValue() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}
