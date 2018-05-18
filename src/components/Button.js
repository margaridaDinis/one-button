import React, { Component } from 'react';
import { TouchableWithoutFeedback, View, Vibration } from 'react-native';

import { REQUEST_URL } from '../stores/variables';

const DURATION = 10000;

class Button extends Component {
	handleOnPress = () => {
		const { type } = this.props;
		fetch(REQUEST_URL, {
			method: 'POST',
			headers: new Headers({
				'Content-Type': 'application/json'
			}),
			body: JSON.stringify({ type })
		})
	};

	handlePressIn = () => {
		Vibration.vibrate(DURATION);
		this.props.buttonState(true);
	};

	handlePressOut = () => {
		Vibration.cancel();
		this.props.buttonState(false);
	};

	render() {
		const { children } = this.props;

		return (
			<View>
				<TouchableWithoutFeedback
					onPress={this.handleOnPress}
					onPressIn={this.handlePressIn}
					onPressOut={this.handlePressOut}
				>
					{children}
				</TouchableWithoutFeedback>
			</View>
		);
	}
}

export default Button;