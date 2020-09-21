import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



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
         <div  class="center">
             <div class="form-group mx-sm-3 mb-2">
             <input type="text" class="form-control"  placeholder="Enter Todo" value={this.state.currentTodo}
             onChange={this.onInputChange}/>
             <button type="submit" class="btn btn-primary mb-4 mt-3" onClick={this.onClick}>Add new item!</button>
             <br/>
             {this.state.todos.length === 0 ? "No todos yet!" :<ul>{bulletTodos}</ul>}
         </div>
         </div>
     );
    }
};

export default App;
