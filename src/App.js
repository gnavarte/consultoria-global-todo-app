import React from 'react';
import './App.css';
import { useTodos } from './hooks/useTodos';
import { TodoAdd, TodoList } from './components';
import { Typography, Grid, Paper } from '@mui/material';

function App() {
  const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodos();

  return (
    <>
      <Typography variant="h6">
        Consultoría Global Todo App
      </Typography>

      <Grid container spacing={2}>
        <Grid item lg={5} xs={12}>
          <TodoAdd onNewTodo={handleNewTodo} />
        </Grid>

        <Grid item lg={7} xs={12}>
          <Paper elevation={3}>
            <TodoList
              todos={todos}
              onDeleteTodo={handleDeleteTodo}
              onToggleTodo={handleToggleTodo}
            />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
