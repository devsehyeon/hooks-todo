import React, { useReducer, useState } from 'react'
import reducer, { ADD, COMPLETE, DELETE, initialState } from './reducer'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [newToDo, setNewToDo] = useState<string>('')

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch({ type: ADD, payload: newToDo })
    setNewToDo('')
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e

    setNewToDo(value)
  }

  return (
    <>
      <h1>Add To Do</h1>
      <form onSubmit={onSubmit}>
        <input
          value={newToDo}
          type="text"
          placeholder="Write to do"
          onChange={onChange}
        />
      </form>

      <ul>
        <h2>To Dos</h2>
        {state?.toDos.map((todo: any) => (
          <li key={todo.id}>
            <span style={{ marginRight: 10 }}>{todo.text}</span>
            <button
              onClick={() => dispatch({ type: DELETE, payload: todo.id })}
            >
              <span role="img" aria-label="close">
                ❌
              </span>
            </button>
            <button
              onClick={() => dispatch({ type: COMPLETE, payload: todo.id })}
            >
              <span role="img" aria-label="check">
                ✔️
              </span>
            </button>
          </li>
        ))}
      </ul>

      <ul>
        {state.completed.length !== 0 && (
          <>
            <h2>Completed To Dos</h2>
            {state?.completed.map((todo: any) => (
              <li key={todo.id}>
                <span style={{ marginRight: 10 }}>{todo.text}</span>
                <button
                  onClick={() => dispatch({ type: DELETE, payload: todo.id })}
                >
                  <span role="img" aria-label="close">
                    ❌
                  </span>
                </button>
                <button
                  onClick={() => dispatch({ type: COMPLETE, payload: todo.id })}
                >
                  <span role="img" aria-label="not_check">
                    🙅🏻‍♂️
                  </span>
                </button>
              </li>
            ))}
          </>
        )}
      </ul>
    </>
  )
}

export default App
