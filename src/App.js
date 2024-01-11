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
        Hay {todosCount} tareas, de las cuales {pendingTodosCount} están pendientes.
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Paper>
            <TodoList
              todos={todos}
              onDeleteTodo={handleDeleteTodo}
              onToggleTodo={handleToggleTodo}
            />
          </Paper>
        </Grid>

        <Grid item xs={5}>
          <Paper>
            <Typography variant="h6">Agregar TODO</Typography>
            <hr />
            <TodoAdd onNewTodo={handleNewTodo} />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
