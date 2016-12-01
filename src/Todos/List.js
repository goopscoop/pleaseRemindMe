import React from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { Icon, Card } from 'react-native-elements';
import {removeTodo, editTodo} from './todos';

const List = ({todos, removeTodo, editTodo}) => {
  const removeItem = (i) => {
    removeTodo(i)
  }

  const editItem = (i) => {
    editTodo(i)
  }

  const mapTodos = () => todos.map((el, i) => (
    <Card 
      title={el.title}
      key={i}
    >
      <View style={styles.container}>
        <Text
          style={styles.text}
        >By {el.expireTimeText} on {el.expireDateText}</Text>
        <View
          style={styles.buttonContainer}
        >
          <Icon
            onPress={() => {
              editItem(i)
            }}
            size={20}
            name='edit'
            type='entypo'
            containerStyle={styles.buttons}
          />
          <Icon
            onPress={() => {
              removeItem(i)
            }}
            size={20}
            name='cross'
            type='entypo'
            containerStyle={styles.buttons}
          />
        </View>
      </View>
    </Card>
    ))

  return (
    <View>
      <Text>Current Reminders</Text>
      {
        mapTodos()
      }
    </View>
  );
};

export default connect(
  state => ({
    todos: state.todos
  }),
  {
    removeTodo,
    editTodo
  }
)(List);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingRight: 15
  },
  buttons: {
    padding: 8
  },
  buttonContainer: {
    flexDirection: 'row',
    flex: .2
  },
  text: {
    flex: .8
  }
});