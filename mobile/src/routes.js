import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Logon from './pages/Logon';

import Delivery from './pages/Delivery';
import Profile from './pages/Profile';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator({
      Sign: createSwitchNavigator({
        Logon,
      }),
      App: createBottomTabNavigator({
        Delivery,
        Profile,
      }, {
        tabBarOptions: {
          keyboardHidesTabBar: true,
          activeTintColor: '#7159c1',
          inactiveTintColor: 'rgba(0, 0, 0, 0.2)',
          style: {
            backgroundColor: '#fff',
          }
        }
      }),
    }, {
      initialRouteName: isSigned ? 'App' : 'Sign'
    }),
  );
