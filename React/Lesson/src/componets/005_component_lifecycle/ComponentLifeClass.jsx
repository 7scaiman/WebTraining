import React, {Component} from 'react';

class ComponentLifeClass extends Component {
    constructor(props) {
        super(props);
        console.log("ComponentLife constructor")

        this.state ={
            count:this.props.count || 0
        }
    }
    componentDidMount() {
        console.log("ComponentLife componentDidMount")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {  /// useEffect
        console.log("ComponentLife componentDidUpdate")
    }

    componentWillUnmount() {
        console.log("ComponentLife componentWillUnmount")
    }
    increment = () => {
        this.setState((state) => ({count: state.count + 1}))
    }
    decrement = () => {
        this.setState((state) => ({count: state.count - 1}))
    }

    render() {
        return (
            <div>
                I am alive class component.
                <div>Value: {this.state.count}</div>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        );
    }
}

export default ComponentLifeClass;