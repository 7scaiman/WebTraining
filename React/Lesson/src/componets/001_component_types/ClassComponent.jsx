import { Component } from "react";

export default class ClassComponent extends Component {

    constructor(props) {
        super();

        this.props.feedback = this.props.feedback || "Normal"
    }

    render() {
        return <h1>React is {this.props.feedback}</h1>
    }

}