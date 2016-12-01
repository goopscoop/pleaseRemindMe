const UPDATE_FIELD = '@todo/UPDATE_FIELD';
const UPDATE_TIME = '@todo/UPDATE_TIME';
const UPDATE_DATE = '@todo/UPDATE_DATE'
const LOAD_TODO = '@todo/LOAD_TODO';
const RESET = '@todo/RESET';

export const reset = () => ({
  type: RESET
})

export const updateField = (field, value) => ({
  type: UPDATE_FIELD,
  field,
  value
});

export const updateTime = (hour, minute) => ({
  type: UPDATE_TIME,
  newState: {
    expireTimeText: _formatTime(hour, minute),
    expireHour: hour,
    expireMinute: minute
  }
});

export const updateDate = (year, month, day) => {
  const date = new Date(year, month, day);
  return {
    type: UPDATE_DATE,
    newState: {
      expireDate: date,
      expireDateText: date.toLocaleDateString()
    }
  };
}

export const loadTodo = todo => ({
  type: LOAD_TODO,
  todo
})
/**
 * Returns e.g. '3:05'.
 */
function _formatTime(hour, minute) {
  const ampm = hour < 12 ? 'AM' : 'PM';
  let convertedHour;
  if (convertedHour === 0) {
    convertedHour = '12';
  } else {
    convertedHour = hour > 12 ? hour - 12 : hour;
  }

  return `${convertedHour}:${minute < 10 ? '0' + minute : minute} ${ampm}`;
}

const currentDate = new Date();

const initialState = {
  isoFormatText: 'pick a time (24-hour format)',
  expireHour: 5,
  expireMinute: 15,
  expireTimeText: _formatTime(5, 15),
  expireDate: null,
  expireDateText: currentDate.toLocaleDateString(),
  title: '',
  id: null
};

export default todo = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FIELD:
      return {
        ...state,
        [action.field]: action.value
      };
    case LOAD_TODO:
      return {
        ...action.todo
      }
    case UPDATE_TIME:
    case UPDATE_DATE:
      return {
        ...state,
        ...action.newState
      }
    case RESET:
      return {
        ...initialState
      }
    default:
      return state;
  }
}