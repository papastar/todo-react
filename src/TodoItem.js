import React, {Component} from 'react';
import './TodoItem.css'

class TodoItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='ToDoItem'>
                <p className='ToDoItem-Text'>{this.props.item}</p>
                <div className='ToDoItem-Delete' onClick={this.props.deleteItem}>-</div>
            </div>
        );
    }
}


export default TodoItem;