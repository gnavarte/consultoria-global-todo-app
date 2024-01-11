import React from 'react';
import { useForm } from '../hooks/useForm';
import { TextField, Button, Grid, Paper } from '@mui/material';

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: '',
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description: description,
    };

    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <Paper elevation={3} style={{ padding: 20 }}>
      <form onSubmit={onFormSubmit}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={8}>
            <TextField
              fullWidth
              variant="outlined"
              label="¿Qué hay que hacer?"
              name="description"
              value={description}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={4}>
            <Button type="submit" variant="outlined" color="primary" style={{ marginTop: 8 }}>
              Agregar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};
