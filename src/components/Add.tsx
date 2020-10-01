import React, { useState } from 'react'
import { ADD } from '../actions'
import { useDispatch } from '../context'

export default () => {
  const [newToDo, setNewToDo] = useState<string>('')
  const dispatch = useDispatch()

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
    <form onSubmit={onSubmit}>
      <input
        value={newToDo}
        type="text"
        placeholder="Write to do"
        onChange={onChange}
      />
    </form>
  )
}
