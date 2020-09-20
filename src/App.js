import React, {Component} from 'react';
import './App.css';



import SingleTodo from "./SingleTodo";

class App extends React.Component {
    state = {
        todos:[],
        currentTodo:""
    };

    onInputChange = e =>{
        this.setState({currentTodo:e.target.value});
    }
    onClick = () => {
        let todosCopy = this.state.todos.slice();
        todosCopy.push(this.state.currentTodo);

        this.setState({todos:todosCopy,currentTodo:""});
    }


    deleteTodo = i => {
        let todosCopy = this.state.todos.slice();
        todosCopy.splice(i,1);

        this.setState({todos:todosCopy});
    }

    render(){
        let bulletTodos = this.state.todos.map((e,i) =>{
            return (
                <SingleTodo todo={e} delete={() => this.deleteTodo((i))}/>
            );
        });
     return(
         <div class="center">
             <input placeholder="Enter Todo" value={this.state.currentTodo}
             onChange={this.onInputChange}/>
             <button class="btn" onClick={this.onClick}>Add!</button>
             <br/>
             {this.state.todos.length === 0 ? "No todos yet!" :<ul>{bulletTodos}</ul>}
         </div>
     );
    }
};

export default App;
