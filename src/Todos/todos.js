import shortid from 'shortid';
import _findIndex from 'lodash/findIndex';
import {toggleInputModal} from '../Views/viewModule';
import {loadTodo} from '../Todo/todoModule';

const CREATE = '@todos/CREATE';
const UPDATE = '@todos/UPDATE';
const DELETE = '@todos/DELETE';

export const addOrUpdateTodo = () => {
  return (dispatch, getState) => {
    const {todos, todo} = getState();
    if (todo.id) { // update
      const index = _findIndex(todos, {id: todo.id})

      dispatch({
        type: UPDATE,
        todo,
        index
      })
    } else {
      dispatch({ // create
        type: CREATE,
        todo: {
          ...todo,
          id: shortid.generate()
        }
      });
    }
  }
};

export const removeTodo = i => ({
  type: DELETE,
  index: i
});

export const editTodo = i => {
  return (dispatch, getState) => {
    const {todos} = getState();
    dispatch(loadTodo(todos[i]));
    dispatch(toggleInputModal());
  }
}

const initialState = [];

/* 
todo = {
  title: 'foo',
  expires: '12:20am',
  expireText: '12:20am'
  description: 'bar',
}
*/

export default Todos = (state = initialState, action) => {
  switch (action.type) {
    case CREATE:
      return [{...action.todo}, ...state];
    case UPDATE:
      return [
        ...state.slice(0, action.index),
        {...action.todo},
        ...state.slice(action.index + 1)
      ];
    case DELETE:
      return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
    default:
      return state;
  }
};
