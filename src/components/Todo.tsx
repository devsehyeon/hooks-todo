import React from 'react'
import { DELETE, COMPLETE, UNCOMPLETE } from '../actions'
import { useDispatch } from '../context'

interface Props {
  id: string
  text: string
  isCompleted?: boolean
}

export default ({ id, text, isCompleted }: Props) => {
  const dispatch = useDispatch()
  return (
    <li>
      <span style={{ marginRight: 10 }}>{text}</span>
      <button onClick={() => dispatch({ type: DELETE, payload: id })}>
        <span role="img" aria-label="close">
          ❌
        </span>
      </button>
      <button
        onClick={() =>
          dispatch({ type: isCompleted ? UNCOMPLETE : COMPLETE, payload: id })
        }
      >
        <span role="img" aria-label="check">
          {isCompleted ? '🙅🏻‍♂️' : '✔️'}
        </span>
      </button>
    </li>
  )
}
