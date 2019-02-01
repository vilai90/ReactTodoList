import React, { Component } from "react";
import { List, ListItem } from 'react-native-elements';
import {Modal, Text, View, Button, TextInput} from 'react-native';

class TodoCustomItems extends Component {
	constructor(props) {
    super(props);
 
    this.createTasks = this.createTasks.bind(this);
  }
  
  createTasks(item) {
    return <ListItem containerStyle={item.style} onPress={() => this.select(item.key)}
              key={item.key} title={item.name} />;
  }
 
select(key) {
    this.props.select(key);
  }
 
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
	console.log(listItems);
    return (
      <View>
        {listItems}
      </View>
    );
  }
};
 
export default TodoCustomItems;