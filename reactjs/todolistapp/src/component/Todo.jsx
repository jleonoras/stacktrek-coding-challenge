// Add todo

import React from 'react'
import List from './List';

class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            items: [], 
            text: "" 
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    render() {
        return (
            <div>
                <h1>Todo</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        id="newTodo" 
                        onChange={this.handleChange}
                        value={this.state.text}
                        placeholder="Enter Task"
                        />
                    <button>Add</button>
                </form>
                <List items={this.state.items} handleDelete={this.handleDelete}/>
            </div>
        );
    }

    //update input state
    handleChange = (e) => {
        this.setState({ text: e.target.value})
    };

    //update todo list
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.text.length === 0) {
            return;
        }
        const newItem = {
            text: this.state.text,
            //create id for each input
            id: Math.random()
        };
        //Reset userInput after inputing data
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ""
        }));
    }

    // delete todo item
    handleDelete = id => {
        const filteredItems = this.state.items.filter(item => item.id !== id);
        this.setState({
            items: filteredItems
        });
    }
}

export default Todo