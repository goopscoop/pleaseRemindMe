import {TimePickerAndroid, DatePickerAndroid} from 'react-native';

export const showTimePickerAndroid = async (defaultHour, defaultMin, successAction) => {
  try {
    const {action, minute, hour} = await TimePickerAndroid.open({
      is24Hour: false, hour: defaultHour, minute: defaultMin
    });

    if (action === TimePickerAndroid.timeSetAction) {
      successAction(hour, minute);
    }
  } catch ({code, message}) {
    console.warn(`Error in setting expire time: `, message);
  }
};

export const showDatePickerAndroid = async (defaultDate, successAction) => {
  try {
    const {action, year, month, day} = await DatePickerAndroid.open({
      date: defaultDate ? new Date(defaultDate) : new Date()
    });

    if (action === DatePickerAndroid.dateSetAction) {
      successAction(year, month, day);
    }
  } catch ({code, message}) {
    console.warn(`Error in example expire date: `, message);
  }
};