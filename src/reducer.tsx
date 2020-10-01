import { v4 as uuid } from 'uuid'

export const initialState = {
  toDos: [],
  completed: [],
}

export const ADD = 'add'
export const DELETE = 'delete'
export const COMPLETE = 'complete'

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
    default:
      return
  }
}

export default reducer
