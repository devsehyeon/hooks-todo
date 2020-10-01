import React, { createContext, useReducer, useContext } from 'react'
import reducer, { initialState, TodoState } from './reducer'

interface ContextDefaultValue {
  state: TodoState
  dispatch: ({ type }: { type: string; payload: string }) => void
}

const TodoContext = createContext<ContextDefaultValue | null>(null)

const TodoProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  )
}

export const useDispatch = () => {
  const { dispatch } = useContext(TodoContext)!

  return dispatch
}

export const useState = () => {
  const { state } = useContext(TodoContext)!

  return state
}

export default TodoProvider
