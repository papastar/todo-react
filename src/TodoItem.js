import React, {Component} from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='TodoItem'>
                <p className='TodoItem-Text'>{this.props.item}</p>
                <div className='TodoItem-delete' onClick={this.props.deleteItem}>-</div>
            </div>
        );
    }
}


export default TodoItem;