import { createContext,useContext } from "react";
import React from 'react';

export const TodoContext = React.createContext({
    todos : [
        {
            id:1,
            todo : 'todo_msg',
            completed : false
        }
    ],
    addTodo : (todo) => {},
    updateTodo : (id,todo) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {}
});

export const UseTodo =() => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider

