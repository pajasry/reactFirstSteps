import React, { Component } from 'react';
import TodoList from './components/TodoList.js';
import { AppBar, Toolbar, Typography, Paper } from '@material-ui/core';

class App extends Component {
    render() {
        return (
            <>
                <AppBar color="primary" position="static" style={{ height: 64 }}>
                    <Toolbar style={{ height: 64 }}>
                        <Typography color="inherit">TodoList</Typography>
                    </Toolbar>
                </AppBar>
                <TodoList/>
            </>
        )
    }
}

export default App;
