import React from 'react';
import {Modal, TouchableHighlight, Text, View, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import {Icon, FormLabel, FormInput, Text as TextE, Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {toggleInputModal} from '../Views/viewModule';
import {addOrUpdateTodo} from './todos';
import {updateTime, updateField, updateDate} from '../Todo/todoModule';
import {showTimePickerAndroid, showDatePickerAndroid} from '../utils/dateAndTimePickers.js';

const NewTodoModal = ({
  newTabOpen,
  title,
  expireDateText,
  expireDate,
  expireTimeText,
  addOrUpdateTodo,
  expireMinute,
  expireHour,
  toggleInputModal,
  updateField,
  updateTime,
  updateDate
}) => {
  // setModalVisible(visible) {
  //   this.setState({modalVisible: visible});
  // }
  const showTimePicker = () => {
    showTimePickerAndroid(expireHour, expireMinute, updateTime);
  };

  const showDatePicker = () => {
    showDatePickerAndroid(expireDate, updateDate);
  };
  

  return (
    <View>
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={newTabOpen}
        onRequestClose={()=>{}}
      >
       <View style={styles.container}>
        <View>
          <TextE h3>Remind me to:</TextE>

          <FormInput 
            value={title}
            onChangeText={(text) => updateField('title', text)}
          />
          
          <FormLabel>By this time...</FormLabel>
          <TouchableHighlight
            style={styles.timeSelector}
            onPress={() => showTimePicker()}>
            <Text style={styles.timeSelectorText}>{expireTimeText}</Text>
          </TouchableHighlight>

          <FormLabel>On this day...</FormLabel>
          <TouchableHighlight
            style={styles.timeSelector}
            onPress={() => showDatePicker()}>
            <Text style={styles.timeSelectorText}>{expireDateText}</Text>
          </TouchableHighlight>

        </View>
       </View>
       <Icon
          onPress={() => {
            toggleInputModal();
          }}
          raised
          reverse
          name='cross'
          type='entypo'
          containerStyle={styles.cancelButton}
        />
       <Icon
          onPress={() => {
            addOrUpdateTodo();
            toggleInputModal();
          }}
          raised
          reverse
          name='check'
          type='entypo'
          containerStyle={styles.newButton}
        />
      </Modal>
    </View>
  );
}

var styles = StyleSheet.create({
  text: {
    color: 'black',
  },
});

export default connect(
  state => ({
    newTabOpen: state.views.newTabOpen,
    isoFormatText: state.todo.isoFormatText,
    expireHour: state.todo.expireHour,
    expireMinute: state.todo.expireMinute,
    expireTimeText: state.todo.expireTimeText,
    expireDateText: state.todo.expireDateText,
    expireDate: state.todo.expireDate,
    title: state.todo.title,
    id: state.todo.id
  }),
  {
    toggleInputModal,
    addOrUpdateTodo,
    updateTime,
    updateField,
    updateDate
  }
)(NewTodoModal);

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    marginTop: 25,
    marginLeft: 15,
    marginRight: 15
  },
  timeSelector: {
    marginLeft: 20,
    paddingTop: 10,
    paddingBottom: 15,
  },
  timeSelectorText: {
    fontSize: 30
  },
  newButton: {
    bottom: 15,
    right: 15,
    position: 'absolute',
  },
  cancelButton: {
    bottom: 15,
    left: 15,
    position: 'absolute',
  }
});
