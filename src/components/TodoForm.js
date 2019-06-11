import React, { Component } from 'react';

class TodoForm extends Component{
constructor(){
    super();
    this.state = {
        title: '',
        description: '',
        responsable: '',
        priority: 'low'
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleInput(e){
    const { value, name } = e.target;
    this.setState({
       [name]: value
    });
}

handleSubmit(e){
    e.preventDefault();
    this.props.onAddTodo(this.state);
    console.log("sending the data...");
}

    render(){
        return (
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control"
                        name="title"
                        onChange={this.handleInput}
                        placeholder="Title"/>
                    </div>
                    <div className="form-group">                        
                        <input
                            type="text"
                            className="form-control"
                            onChange={this.handleInput}
                            name="responsable"
                            placeholder="responsable"/>
                    </div>                    
                    <div className="form-group">                        
                        <input
                            type="text"
                            className="form-control"
                            onChange={this.handleInput}
                            name="description"
                            placeholder="Description"/>
                    </div>                                       
                    <div className="form-group">                        
                        <select
                            className="form-control"
                            onChange={this.handleInput}
                            name="priority">
                                <option>low</option>
                                <option>medium</option>
                                <option>high</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Save" className="btn btn-primary btn-md"></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default TodoForm;