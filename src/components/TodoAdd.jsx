import React from 'react';
import { useForm } from '../hooks/useForm';
import { TextField, Button, Grid } from '@mui/material';

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: '',
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (description.trim().length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description: description,
    };

    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <Grid container spacing={2} direction={'column'}>
        <Grid item>
          <TextField
            fullWidth
            variant="outlined"
            label="¿Qué hay que hacer?"
            name="description"
            value={description}
            onChange={onInputChange}
          />
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Agregar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
