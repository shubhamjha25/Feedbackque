import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/About';

const screens = {
    About: {
        screen: About,
        navigationOptions: {
            title: 'About GameZone'
        }
    },
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: 'whitesmoke', height: 80 }
    }
});

export default AboutStack;