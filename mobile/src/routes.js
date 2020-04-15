import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Logon from './pages/Logon';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Detail from './pages/Detail';

import DeliveryList from './components/DeliveryList';
import DeliveredList from './components/DeliveredList';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator({
      Sign: createSwitchNavigator({
        Logon,
        DeliveryList,
        DeliveredList,
        Detail,
      }),
      App: createBottomTabNavigator({
        Dashboard,
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
