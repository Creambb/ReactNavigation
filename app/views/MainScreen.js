import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class HomeScreen extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>This is Main Page</Text>
				<TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Settings')}>
					<Text style={styles.buttonText}>Go to Settings Page</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Login')}>
					<Text style={styles.buttonText}>Go back to Login Page</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		marginTop: 80,
		color: '#ae9373',
		fontSize: 20,
		lineHeight: 30,
		textAlign: 'center'
	},
	button: {
		width: 250,
		marginTop: 80,
		minHeight: 46,
		paddingHorizontal: 15,
		paddingVertical: 6,
		borderStyle: 'solid',
		borderWidth: 1,
		borderRadius: 8,
		borderColor: '#ae9373',
		backgroundColor: '#f5f5f5',
		textAlign: 'center'
	},
	buttonText: {
		color: '#ae9373',
		fontSize: 20,
		lineHeight: 30,
		textAlign: 'center'
	},
})