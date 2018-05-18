import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class Map extends Component {
	componentDidMount() {
		const { nav } = this.props;
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.top}>
					<Text style={styles.text}>Teck Talks</Text>
				</View>
				<View style={styles.center}>
					<Text style={[styles.text, styles.textVertical]}>Meeting</Text>
					<Text style={[styles.text, styles.textVertical]}>Celebration</Text>
				</View>
				<View style={styles.bottom}>
					<Text style={styles.text}>Friday Drinks!</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#63bcfc',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderColor: 'gray',
		borderWidth: 1
	},
	top: {
		justifyContent: 'center',
		height: '33.3333%'
	},
	center: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		borderTopWidth: 5,
		borderBottomWidth: 5,
		borderColor: 'white',
		height: '33.3333%'
	},
	bottom: {
		justifyContent: 'center',
		height: '33.3333%'
	},
	text: {
		color: 'white',
		fontSize: 30
	},
	textVertical: {
		transform: [{ rotate: '-90deg'}]
	}
});