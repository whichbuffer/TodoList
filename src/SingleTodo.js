import React,{Component} from 'react';

class SingleTodo extends Component{


    render() {
        return(
            <li class="text">{this.props.todo}<button class="btn btn-danger ml-4 p-2 m-2" onClick={this.props.delete}>X</button></li>
        );
    }
}




export default SingleTodo;
