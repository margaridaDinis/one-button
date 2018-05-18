import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import backgroundImage from '../../assets/birthday-celebration-confetti.jpg';
import Button from '../Button';
import { CELEBRATION } from '../../stores/variables';

export default class Celebration extends Component {
	state = {
		pressed: false
	};

	_onLayout = event => {
		const { width, height } = event.nativeEvent.layout;
		const orientation = (width > height) ? 'LANDSCAPE' : 'PORTRAIT';

		this.setState({ orientation });
	};

	render() {
		const { pressed } = this.state;

		return (
			<View style={styles.container} onLayout={this._onLayout}>
				<Image source={backgroundImage} style={styles.image}/>
				<Button
					type={CELEBRATION}
					buttonState={(pressed) => this.setState({ pressed })}
				>
					<View style={[styles.button, pressed ? styles.buttonPressed : null]}>
						<Text style={styles.buttonText}>
							{pressed ? 'Fat pigs.' : `There's cake!`}
						</Text>
					</View>
				</Button>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	image: {
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
		position: 'absolute'
	},
	button: {
		backgroundColor: 'skyblue',
		width: 200,
		height: 200,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 200
	},
	buttonText: {
		color: 'white',
		fontSize: 40,
		textAlign: 'center'
	},
	buttonPressed: {
		backgroundColor: 'lightcoral'
	}
});
