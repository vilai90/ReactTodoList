import React from "react";
import TodoListCustom from "./TodoListCustom.js";
import { StyleSheet, Text, View } from 'react-native';

const Application = () => (
  <View>
		<Text h3>This is a standard React TodoList</Text>
			<TodoListCustom/>
		<Text h3>This is a React TodoList utilizing Redux</Text>
		<View>


		</View>
  </View>
);
export default Application;

/*<div>
		<h3>This is a standard React TodoList</h3>
		<TodoListCustom/>
		<h3>This is a React TodoList utilizing Redux</h3>
		<div>
		<Form/>
		<List/>
		<UpdateModal /> 
		</div>
  </div>*/