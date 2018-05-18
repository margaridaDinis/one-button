import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import backgroundImage from '../../assets/mark.jpg';
import button from '../../assets/tecktalk.png';
import Button from '../Button';
import { TECH_TALK } from '../../stores/variables';

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
		const image = pressed ? {uri: 'https://media.giphy.com/media/xT39CU8vEn8bcmiI12/giphy.gif'} : backgroundImage;

		return (
			<View style={styles.container} onLayout={this._onLayout}>
				<Image source={image} style={styles.image}/>
				<Button
					type={TECH_TALK}
					buttonState={(pressed) => this.setState({ pressed })}
				>
					<View style={styles.button}>
						{!pressed && [
							<Image key='IMG' source={button} style={styles.buttonImage}/>,
							<Text key='TECK' style={styles.buttonText}>TECK</Text>,
							<Text key='TALK' style={styles.buttonText}>TALK</Text>,
							<Text key='TIME' style={styles.buttonText}>TIME</Text>
						]}
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
		alignItems: 'center',
		backgroundColor: 'white'
	},
	image: {
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
		position: 'absolute'
	},
	button: {
		width: 300,
		height: 300,
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonImage: {
		position: 'absolute'
	},
	buttonText: {
		color: 'white',
		fontSize: 40,
		textAlign: 'center'
	}
});
