import React from 'react';
import {connect} from 'react-redux';
import { AppRegistry, StyleSheet, Text, View, TextInput } from 'react-native';
import { Icon, Text as TextE } from 'react-native-elements';
import List from './Todos/List';
import {toggleInputModal} from './Views/viewModule';
import InputModal from './Todos/InputModal';
import TopMenu from './TopMenu';

const Home = ({input, toggleInputModal}) => {
  return (
    <View style={styles.container}>
      <TextE h3 style={styles.headerText}>
        Please remind me to...
      </TextE>
      <List />
      <InputModal />
      <Icon
        onPress={() => {
          toggleInputModal('new');
        }}
        raised
        reverse
        name='add-to-list'
        type='entypo'
        containerStyle={styles.newButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    padding: 15
  },
  headerText: {
    textAlign: 'center',
    margin: 10,
    paddingBottom: 17
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  newButton: {
    bottom: 15,
    right: 15,
    position: 'absolute',
  }
});

export default connect(
  null,
  {
    toggleInputModal
  }
)(Home);
