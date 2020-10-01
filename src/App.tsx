import React from 'react'
import Add from './components/Add'
import List from './components/List'
import Todo from './components/Todo'
import { useState } from './context'

function App() {
  const { toDos, completed } = useState()
  return (
    <>
      <Add />

      <List name="To do">
        {toDos.map((todo: any) => (
          <Todo key={todo.id} id={todo.id} text={todo.text} />
        ))}
      </List>

      <List name={completed.length !== 0 ? 'Completed' : ''}>
        {completed.map((todo: any) => (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            isCompleted={true}
          />
        ))}
      </List>
    </>
  )
}

export default App
