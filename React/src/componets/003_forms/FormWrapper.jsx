import React, {Component} from 'react';
class FormWrapper extends Component {
    constructor() {
        super();
        this.state = {
            todo:  "",
            todos: [],
        }
    }
    handleChange = (event) => {
        console.log(event)
        this.setState({
            todo: event.target.value
        })
    }
    addTodo = (event) => {
        event.preventDefault();

        this.setState((state) => {
            return {
                todos: [...state.todos,state.todo],
                todo:""
            }
        })

    }
    render() {
        return (
            <div>
             <form>
                 <input type="text"  value={this.state.todo} onChange={this.handleChange}/>
                 <button type="submit" onClick={this.addTodo} >Submit</button>
                 <div>Current value:{this.state.todo} </div>
             </form>

              <div>
                  <h1>TODOS</h1>
                  <ul>
                      {this.state.todos.map(todo => <li>{todo}</li>)}
                  </ul>
              </div>
            </div>
        );
    }
}

export default FormWrapper;