import { useContext,createContext } from "react";

export const TodoContext = createContext({
    todo:[{
        id:1,
        todo:'todo msg',
        complete:false
    }],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleCompleted:(id)=>{}
})

export const UseTodo = () =>{
    return useContext(TodoContext)
}

export const  TodoProvider = TodoContext.Provider