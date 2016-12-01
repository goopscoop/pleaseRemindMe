import React from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import {toggleNewTag} from './Views/viewModule';


const TopMenu = ({newTabOpen, toggleNewTag}) => {

  const handlePressNew = () => {
    if(newTabOpen) {return;}
    toggleNewTag();
  }

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={handlePressNew} style={[styles.row, styles.new]}>
        <Text>New</Text>
      </TouchableHighlight>
      <TouchableHighlight style={[styles.row, styles.new]}>
          <Text>Home</Text>
      </TouchableHighlight>
      <TouchableHighlight style={[styles.row, styles.new]}>
        <Text>Profile</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 50
  },
  row: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
  },
  new: {
    backgroundColor: '#0A8754'
  },
  home: {
    backgroundColor: '#508CA4'
  },
  profile: {
    backgroundColor: '#508CA4'
  }
});

export default connect(
  state => ({
    newTabOpen: state.views.newTabOpen
  }),
  {
    toggleNewTag
  }
)(TopMenu);