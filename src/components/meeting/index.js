import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Image } from 'react-native';

import button from '../../assets/button.png';
import Button from '../Button';
import { MEETING } from '../../stores/variables';

export default class Meeting extends Component {
	state = {
		orientation: '',
		pressed: false
	};

	_onLayout = event => {
		const { width, height } = event.nativeEvent.layout;
		const orientation = (width > height) ? 'LANDSCAPE' : 'PORTRAIT';

		this.setState({ orientation });
	};

	render() {
		const { orientation, pressed } = this.state;

		return (
			<View style={styles.container} onLayout={this._onLayout}>
				<View style={styles.header}>
					<Text style={styles.headerTitle}>IN CASE OF</Text>
				</View>
				<View style={[styles.body, orientation === 'LANDSCAPE' ? styles.bodyLandscape : null]}>
					<Text style={styles.bodyTitle}>PRESS</Text>
					<View style={styles.buttonOut}>
						<Button
							type={MEETING}
							buttonState={(pressed) => this.setState({ pressed })}
						>
							<Image source={button} style={[styles.buttonIn, pressed ? styles.buttonInPressed : null]} />
						</Button>
					</View>
					<Text style={styles.bodyTitle}>HERE</Text>
				</View>
				<View style={styles.footer}>
					<Text style={[styles.footerTitle, orientation === 'LANDSCAPE' ? styles.footerTitleLandscape : null]}>MEETING</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: Platform.OS === 'ios' ? 20 : 0,
		backgroundColor: 'firebrick',
		borderWidth: 7,
		borderColor: 'white',
		justifyContent: 'space-between'
	},
	header: {
		height: '20%',
		borderBottomWidth: 7,
		borderColor: 'white',
		justifyContent: 'center',
		alignItems: 'center'
	},
	headerTitle: {
		color: 'white',
		fontSize: 60
	},
	body: {
		height: '60%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	bodyLandscape: {
		flexDirection: 'row'
	},
	bodyTitle: {
		color: 'white',
		fontSize: 40,
		padding: 20
	},
	buttonOut: {
		width: 150,
		height: 150,
		backgroundColor: '#111',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 100
	},
	buttonIn: {
		width: 135,
		height: 135
	},
	buttonInPressed: {
		opacity: 0.7
	},
	footer: {
		height: '20%',
		borderTopWidth: 7,
		borderColor: 'white',
		justifyContent: 'center',
		alignItems: 'center'
	},
	footerTitle: {
		color: 'white',
		fontSize: 75
	},
	footerTitleLandscape: {
		fontSize: 65
	}
});
