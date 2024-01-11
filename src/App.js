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
        Lista de tareas
      </Typography>

      <Grid container spacing={2}>
        <Grid item lg={5} xs={12}>
          <TodoAdd onNewTodo={handleNewTodo} />
          <Typography variant="body1">
            Total de tareas: {todosCount}
          </Typography>
          <Typography variant="body1">
            Tareas pendientes: {pendingTodosCount}
          </Typography>
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
