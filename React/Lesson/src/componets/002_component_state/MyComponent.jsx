import { Component } from "react";

export default class MyComponent extends Component {
    constructor(props) {
        super(props);
        console.log("MyComponent constructed", props)

        //this.handleClick = this.handleClick.bind(this)

        this.state = {
            count: this.props.count || 0,
            firstName: this.props.firstName || "John",
            lastName: this.props.lastName || "Doe",
        }
    }

    // handleClick() {
    //     console.log("handleClick")
    //     console.log(this)
    //     this.props.count++;
    // }

    onClick = (event) => {
        console.log("handleClick")
        this.setState(state => ({count: state.count + 1}))
    }

    render() {
        return (
            <>
                <h1>Hello user: {this.state.firstName} {this.state.lastName}</h1>
                <h1>Clicked: {this.state.count}</h1>
                <button onClick={this.onClick}>Click</button>
            </>
        )
    }

}