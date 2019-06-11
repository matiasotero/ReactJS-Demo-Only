import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation'
// import TodoElement from './components/TodoElemet';
import TodoForm from './components/TodoForm';

import { todos } from './todos.json';

class App extends Component{
constructor(){
  super();
  this.state = {
    todos
  };
  this.handleAddTodo = this.handleAddTodo.bind(this);
}

handleAddTodo(todo){
  this.setState({
    todos: [...this.state.todos, todo]
  });
}

handleRemoveTodo(index){
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index;
      })
    });
}

removeTodo(index){
  if(window.confirm('Are you sure do you want to delete this task?')){
    this.setState({
      todos: this.state.todos.filter((e,i) => {
        return i !== index;
      })
    });
  }
}

  render () {
  const todos = this.state.todos.map((todo, i) => {
    return (
      // <TodoElement task={ todo } key= { i } index = { i } onDelete={ this.handleRemoveTodo }/>
      <div className="col-md-4" key = { i }>
      <div className="card mt-4">
        <div className="card-header">
          <h3>{ todo.title }</h3>
          <span className="badge badge-pill badge-danger mx-auto">{ todo.priority }</span>
        </div>
        <div className="card-body">
          <p>{ todo.description }</p>
          <p>{ todo.responsable }</p>
        </div>
        <div className="card-footer">
          <button 
            className="btn btn-danger btn-md"
            onClick={ this.removeTodo.bind(this, i) }>Delete</button>
        </div>
      </div>
    </div>
    )
  });

    return (
      <div className="App">
        <Navigation miTitulo="Tasks" cantTareas={ this.state.todos.length }/>

        <div className="container">          
          <div className="row mt-4">
            <div className="col-md-4">           
                <img src={logo} className="App-logo h-25" alt="logo" />   
                <TodoForm onAddTodo={this.handleAddTodo}/>
            </div>
            { todos }
          </div>
        </div>
          
      </div>
    );
  }
}

export default App;
