import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import store from "./js/store/index";
import Application from "./js/components/Application";

export default class App extends React.Component {
  render() {
    return (
	 <Provider store={store}>
      <View style={styles.container}>
        <Application />
      </View>
	  </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
