import React, {Component} from 'react';
import './Todo.css';
import Logo from './asset/logo.png'
import TodoItem from "./TodoItem";

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [
                { 'todo': 'clean house' },
                { 'todo': 'work' }
            ],
            todoContent: '',
        };
    }

    render() {
        return (
            <div className='ToDo'>
                <img src={Logo} className='Logo'/>
                <h1 className='ToDo-Header'>React to do</h1>
                <div className='ToDo-Container'>
                    <div className='Todo-Content'>
                        {
                            this.state.todoList.map((item, key) => {
                                return <TodoItem key={key}
                                                 item={item.todo}
                                                 deleteItem={this.deleteItem.bind(this,key)}/>
                            })
                        }
                    </div>
                    <input type='text' value={this.state.todoContent} onChange={this.handleInput}
                           onKeyPress={this.handleKeyPress}/>
                </div>
                <div className='ToDo-Add' onClick={this.createNewTodo}>+</div>

            </div>
        );
    }


    handleInput = (e) => {
        this.setState({
            todoContent: e.target.value
        })
    };

    handleKeyPress = (e) => {
        if (e.target.value !== '') {
            if (e.key === 'Enter') {
                console.log("handleKeyPress");
                this.createNewTodo()
            }
        }
    };

    createNewTodo = () => {
        this.setState(({ todoList, todoContent }) => ({
            todoList: [
                ...todoList,
                {
                    todo:todoContent
                }
            ],
            todoContent: ''
        }));
    };

    deleteItem = (index) => {
        this.setState(({ todoList }) => {
            return ({
                todoList: todoList.filter((item, key) =>
                    index !== key
                )
            });
        })
    };


}


export default Todo;