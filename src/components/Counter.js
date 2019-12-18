import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { counter, onDelete, onIncrement, onDecrement } = this.props;
        const disabled = counter.value > 0 ? false : true;
        return (
            <div className="row">
                <div className="col-1">
                    <span className={this.getBadgeClasses()}>{this.formartValue()}</span>
                </div>

                <div className="col">
                    <button onClick={() => onIncrement(counter)} className="btn btn-secondary btn-sm">
                        +
                    </button>
                    <button
                        onClick={() => onDecrement(counter)}
                        className="btn btn-secondary btn-sm m-2"
                        disabled={disabled}
                    >
                        -
                    </button>
                    <button onClick={() => onDelete(counter.id)} className="btn btn-danger btn-sm">
                        x
                    </button>
                </div>
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
