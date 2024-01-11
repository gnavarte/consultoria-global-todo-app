import React from "react";
import { ListItemButton, ListItemSecondaryAction, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <ListItemButton
      onClick={() => onToggleTodo && onToggleTodo(todo.id)}
    >
      <ListItemText
        sx={{
          textDecoration: todo.done ? "line-through" : "none",
        }}
      >
        {todo.description}
      </ListItemText>
      <ListItemSecondaryAction>
        <DeleteIcon onClick={() => onDeleteTodo && onDeleteTodo(todo.id)} />
      </ListItemSecondaryAction>
    </ListItemButton>
  );
}