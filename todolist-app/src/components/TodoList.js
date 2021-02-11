import React, { Component } from 'react';
import { Paper, Grid, TextField, IconButton, List } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import TodoItem from './TodoItem';

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state ={
            todos:[],
            inputValue: ""
        }
    }
    handleInputChange = (newValue)=>{
        this.setState({inputValue:newValue});
    }
    handleTodoAdd = ()=>{
        const {todos,inputValue} = this.state;
        todos.push({title:inputValue, isCompleted:false});
        this.setState({todos:todos, inputValue:''});
    }

    handleTodoDelete = (index)=>{
        let todos = this.state.todos;
        console.log(index, todos)
        todos = todos.filter((todo, idx)=>idx!==index)
        console.log(todos)
        this.setState({todos});
    }

    handleTodoCheck=(index, newTodo)=>{
        const todos = this.state.todos;
        todos.map((todo, idx)=>{
            if(idx===index)
                todo.isCompleted=!todo.isCompleted;
            return todo            
        })
        this.setState({todos})

    }


    render() {
        const {todos, inputValue} = this.state;
        return (
            <Paper style={{ margin: 16, padding: 16 }}>
                <Grid container>
                    <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
                        <TextField
                            placeholder="Add Todo here"
                            value={inputValue}
                            onChange={(e)=>this.handleInputChange(e.target.value)}
                            fullWidth
                        />
                    </Grid>
                    <Grid xs={2} md={1} item>
                        <IconButton
                            onClick={this.handleTodoAdd}
                        >
                            <AddIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                <List>
                   {todos.map((todo, idx)=><TodoItem
                    key={`TodoItem${idx}`} 
                    title={todo.title} 
                    isCompleted={todo.isCompleted}
                    onDelete = {()=>this.handleTodoDelete(idx)}
                    onCheck = {()=>this.handleTodoCheck(idx)}
                    />)}
                </List>
            </Paper>
        )
    }
}

export default TodoList;