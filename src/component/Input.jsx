import React, { useState } from 'react'
import { UseTodo } from '../contexts'

export default function Input() {

  const [todo, setTodo] = useState("")

  const { addTodo } = UseTodo([])

  const add = (e) => {
    e.preventDefault()

    if (!todo) return

    // addTodos({id:Date.now,todo:todo,complete:false})
    addTodo({ todo, complete: false })
    setTodo("")
  }



  return (
    <>
      <form className='flex ' onSubmit={add}>

        <input
          type="text"
          placeholder='Enter task  here'
          className=' bg-transparent outline-none w-full'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button 
        className='bg-green-600 px-3 py-2 rounded-r-lg shrink-0 '
        type='submit'
        >add</button>

      </form>


    </>
  )
}
