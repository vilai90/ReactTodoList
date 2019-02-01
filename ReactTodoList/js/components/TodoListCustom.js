import React, { Component } from "react";
import DatePicker from "react-native-datepicker";
import TodoCustomItems from "./TodoCustomItems";
import styles from "./TodoListStyles";
import uuidv1 from "uuid";
import {Linking, Modal, Text, View, Button, TextInput, StyleSheet} from 'react-native';

class TodoListCustom extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			showModal: false,
			modalType: "",
			taskName: '',
			dueDate: null,
			description: '',
		};

		this.addItem = this.addItem.bind(this);
		this.editItem = this.editItem.bind(this);
		this.selectItem = this.selectItem.bind(this);
		this.exportList = this.exportList.bind(this);
		this.deleteItems = this.deleteItems.bind(this);
		this.deleteAll = this.deleteAll.bind(this);
		this.showUpdateModal = this.showUpdateModal.bind(this);
		this.taskNameHandler = this.taskNameHandler.bind(this);
		this.dueDateHandler = this.dueDateHandler.bind(this);
		this.descriptionHandler = this.descriptionHandler.bind(this);
    }
	
	addItem() {
		const uid = uuidv1();
		if (this.state.taskName !== "" || this.state.dueDate !== "" || this.state.description !== "") {
			let newItem = {
				name: this.state.taskName,
				dueDate: this.state.dueDate,
				description: this.state.description,
				key: uid,
				style: styles.listItem,
			};
			
			this.setState((prevState) => {
				return { 
					items: prevState.items.concat(newItem),
					showModal: false,
					dueDate: null,
					name: '',
					description: '',
				};
			});
		}
	}
	
	editItem() {
		let selectedItems = this.state.items.filter(function (item) { return item.selected; });
		let selectedItem = selectedItems[0];

		selectedItem.name = this.state.taskName;
		selectedItem.dueDate = this.state.dueDate;
		selectedItem.description = this.state.description;

		this.setState({showModal: false});
	}
	
	selectItem(key) {
		let selectedItems = this.state.items.map(function (item) {
		if (item.key === key) {
			if (!item.selected) { 
				item.style = styles.listItemSelected;
				item.selected = true;
			} else {
				item.style = '';
				item.selected = false;
			}
		} 
		return item;
		});

		console.log(selectedItems);

		this.setState({
			items: selectedItems,
		});
	}
	
	deleteItems() {
		let filteredItems = this.state.items.filter(function (item) {
			return (!item.selected);
		});
	 
		this.setState({
			items: filteredItems
		});
	}
	
	deleteAll() {
		this.setState({
			items: []
		});
	}
	
	exportList() {
		if (this.state.items.length === 0) {
			return null;
		}
		const tasks = this.state.items.map(item => item.name + " " + item.dueDate + " " + item.description + "\r\n");
		const path = FileSystem.documentDirectory + '/TodoList.txt';
		FileSystem.writeAsStringAsync(path, tasks)
			.then((success) => {
				console.log('FILE WRITTEN!');
			})
			.catch((err) => {
				console.log(err.message);
			});
	}
  
	showUpdateModal(buttonValue) {
		let isOpen = true;
		if (buttonValue === "edit") {
			let selectedItems = this.state.items.filter(function (item) { return item.selected; });
			console.log(selectedItems);
			if (selectedItems.length > 1) { 
				alert("More than one task selected. Please only select one for editing."); 
				isOpen = false;
			} else if( selectedItems.length === 0) {
				alert("No task selected. Please select one for editing.");
				isOpen = false;
			} else {
				let selectedItem = selectedItems[0];
				this.setState({
					taskName: selectedItem.name,
					dueDate: selectedItem.dueDate,
					description: selectedItem.description,
				});
			}
		} else {
			this.setState({
				taskName: '',
				dueDate: '',
				description: '',
			});
		}
		
		this.setState({
			showModal: isOpen,
			modalType: buttonValue,
		});
	}

	hideModal = () => {
		this.setState({ showModal: false });
	};

	taskNameHandler(e) {
		this.setState({taskName: e});
	}

	dueDateHandler(date) {
		this.setState({dueDate: date});
	}

	descriptionHandler(e) {
		this.setState({description: e});
	}
  
	render() {
		return (
			<View style={styles.todoListMain}>
				<View>
						<Button style={styles.headerButton} onPress={this.showUpdateModal.bind(this, "add")} title="Add" />
						<Button style={styles.headerButton} onPress={this.showUpdateModal.bind(this, "edit")} title="Edit" />
						<Button style={styles.headerButton} onPress={this.exportList} title="Export" />
						<Button style={styles.headerButton} onPress={this.deleteItems} title="Delete" />
						<Button style={styles.headerButton} onPress={this.deleteAll} title="DeleteAll" />
				</View>
				<TodoCustomItems entries={this.state.items} select={this.selectItem}/>
				<Modal visible={this.state.showModal} onRequestClose={this.hideModal}>
					<Text h1>{this.state.modalType} a Task</Text>
				
						<Text>Name:</Text>
						<TextInput value={this.state.taskName} onChangeText={this.taskNameHandler} />
						<Text>Due Date:</Text>
						<DatePicker date={this.state.dueDate} onDateChange={this.dueDateHandler} />
						<Text>Description:</Text>
						<TextInput value={this.state.description} onChangeText={this.descriptionHandler} />
				
					<Button title={this.state.modalType} onPress={() => {this.state.modalType === "add" ? this.addItem() : this.editItem()}} />
					<Button title="Cancel" onPress={this.hideModal} />
				</Modal>
			</View>
		);
	}
}
 
export default TodoListCustom;