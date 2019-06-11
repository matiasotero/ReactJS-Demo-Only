import React, { Component } from 'react';

class TodoElement extends Component{
    removeTodo(index){
      // this.props.onDelete(index);
    }

    render () {
          return (
            <div className="col-md-4">
              <div className="card mt-4">
                <div className="card-header">
                  <h3>{ this.props.task.title }</h3>
                  <span className="badge badge-pill badge-danger mx-auto">{ this.props.task.priority }</span>
                </div>
                <div className="card-body">
                  <p>{ this.props.task.description }</p>
                  <p>{ this.props.task.responsable }</p>
                </div>
                <div className="card-footer">
                  <button 
                    className="btn btn-danger btn-md"
                    onClick={ this.removeTodo.bind(this, this.props.index) }>Delete</button>
                </div>
              </div>
            </div>
          );
    }
}

export default TodoElement;