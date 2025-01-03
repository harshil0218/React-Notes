import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [{id:1, text:'hiii'}]
}

const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers:{
        // state give current state and action gives data
        addTodo : (state,action) => {
            const todo ={
                // create uniqte id
                id : nanoid(),
                // fetching data from payload object
                text : action.payload 
            }
            // storing data in todos array
            state.todos.push(todo)
        },
        removeTodo : (state ,action) => {
            // filtering out the todo with id
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        }
    }
})
// exporting individual functions it will useful in components 
export const {addTodo,removeTodo} = todoSlice.actions

// to infrom store about reducers we need to export all reducers
export default todoSlice.reducer