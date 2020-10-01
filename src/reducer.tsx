import { v4 as uuid } from 'uuid'
import { ADD, DELETE, COMPLETE, UNCOMPLETE } from './actions'

export interface TodoState {
  toDos: string[]
  completed: string[]
}

export const initialState: TodoState = {
  toDos: [],
  completed: [],
}

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        toDos: [...state.toDos, { text: action.payload, id: uuid() }],
      }
    case DELETE:
      return {
        ...state,
        toDos: state.toDos.filter((todo: any) => todo.id !== action.payload),
        completed: state.completed.filter(
          (todo: any) => todo.id !== action.payload
        ),
      }
    case COMPLETE:
      const target = state.toDos.find(
        (todo: any) => todo.id === action.payload
      )
      return {
        ...state,
        toDos: state.toDos.filter((todo: any) => todo.id !== action.payload),
        completed: [...state.completed, { ...target }],
      }
    case UNCOMPLETE:
      const unTarget = state.completed.find(
        (todo: any) => todo.id === action.payload
      )
      return {
        ...state,
        completed: state.completed.filter(
          (todo: any) => todo.id !== action.payload
        ),
        toDos: [...state.toDos, { ...unTarget }],
      }
    default:
      return
  }
}

export default reducer
