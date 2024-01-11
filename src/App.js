import React from 'react';
import './App.css';
import { useTodos } from './hooks/useTodos';
import { TodoAdd, TodoList } from './components';
import { Typography, Grid, Paper } from '@mui/material';
import '@fontsource/merienda';

function App() {
  const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodos();

  return (
    <>
      <Typography variant="h3" align="center" gutterBottom style={{ fontFamily: 'Merienda, cursive' }}>
        Consultoría Global Todo App
      </Typography>

      <Grid container spacing={2}>
        <Grid item lg={5} xs={12}>
          <TodoAdd onNewTodo={handleNewTodo} />
          <Typography variant="body1" marginTop={2}>
          Total de tareas: {todosCount} | Tareas pendientes: {pendingTodosCount}
          </Typography>
        </Grid>

        <Grid item lg={7} xs={12}>
          {todos.length > 0 && (
            <Paper elevation={3}>
              <TodoList
                todos={todos}
                onDeleteTodo={handleDeleteTodo}
                onToggleTodo={handleToggleTodo}
              />
            </Paper>
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default App;
