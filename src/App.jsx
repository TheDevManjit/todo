import { useState,useEffect } from 'react'
import Input from './component/Input'
import Item from './component/Item'
import { TodoProvider } from './contexts'

import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

const addTodo = (todo) =>{
  setTodos((prev)=>[{id:Date.now,...todo},...prev])
}

const updateTodo = (id,todo) =>{
  setTodos((prev) => prev.map((prevTodo) =>(prevTodo.id===prev.id ? todo : prevTodo)))
}
// const updateTodos = (id,todo) =>{
//   setTodos((prev) => prev.map((prevTodo) =>{
//     if(prev.id === prevTodo.id){
//       todo
//     }else{
//       prevTodo
//     }
//   }))
// }

const deleteTodo = (id) =>{
  setTodos((prev)=> prev.filter((todo) => todo.id !== id))
}


const toggleCompleted = (id) =>{
  setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo,complete:!prevTodo.complete }: prevTodo))
}

useEffect(()=>{
  const todos = JSON.parse(localStorage.getItem("todos"))
  if(todos && todos.length > 0){
   setTodos(todos)
  }
},[])

useEffect(()=>{
 localStorage.setItem("todos",JSON.stringify(todos))
},[todos])


  return (

    <TodoProvider value={{todos,addTodo,deleteTodo,updateTodo,toggleCompleted}}>


      <div className="bg-[#172842] min-h-screen py-8">
        <div className=" max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2"></h1>
          <div className="mb-5 ">
            {/* Todo form goes here */}
            
            <Input />
          </div>
          <div className=" bg-green-200 flex-wrap  gap-y-3 rounded-lg ">
            {/*Loop and Add TodoItem here */}
           {
            todos.map((todo) =>(
            <div key={todo.id} className='w-full'>
                <Item todo={todo}/>

            </div>
            ))
           }
          </div>
        </div>
      </div>

    </TodoProvider>
  )
}

export default App
