import SwipeNavigator from 'react-native-swipe-navigation';
import Map from './Map';
import Meeting from './meeting';
import Celebration from './celebration';
import TechTalks from './techTalks';
import FridayDrinks from './fridayDrinks';

const Navigator = SwipeNavigator({
	Meeting: {
		screen: Meeting,
		type: 'push',
		right: 'Celebration'
	},
	Celebration: {
		screen: Celebration,
		type: 'push',
		left: 'Meeting',
		right: 'TechTalks'
	},
	TechTalks: {
		screen: TechTalks,
		type: 'push',
		left: 'Celebration',
		right: 'FridayDrinks'
	},
	FridayDrinks: {
		screen: FridayDrinks,
		type: 'push',
		left: 'TechTalks'
	}
});

export default Navigator