import React, {Component} from 'react'
import {TodoListItem} from "./TodoListItem";

export class TodoList extends Component{
    state = {
        listTitle: ``,
        taskItems : [
            {
                id: 1,
                name: 'Task 1',
                status: 'pending'
            } ,
            {
                id: 2,
                name: 'Task 2',
                status: 'pending'
            } ,
            {
                id: 3,
                name: 'Task 3',
                status: 'pending'
            }
        ]
    };
componentDidMount() {
    console.log(`Chamou componentDidMount`);
    this.setState({listTitle: `My List Title`});
}

    render(){
    console.log(`Chamou render`);
    //this.setState({listTitle: `My list Title`});
        const handleOnToggleCompleted = (taskId, event) => {
            this.setState(
                {taskItems:
                    this.state.taskItems.map(task => {
                        if (task.id === taskId){
                            return {...task, status: event.target.checked ? 'completed': 'pending'}
                        }
                        return task;
                    })
            });
            console.log(this.state.taskItems);
            this.setState({listTitle: `My List Title`});
        };
        return (
            <div>
                <h1>{this.state.listTitle}</h1>
                <ul>
                    {this.state.taskItems.map(task => (
                        <li>
                            <TodoListItem onToggleCompleted={handleOnToggleCompleted} {...task}/>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}