import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import About from '../screens/About';
import ReviewDetails from '../screens/ReviewDetails';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'GameZone'
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details'
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: 'whitesmoke', height: 80 }
    }
});

export default HomeStack;