import React from 'react';
import { TouchableOpacity } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Logon from '~/pages/Logon';

import ReportIssue from '~/pages/ReportIssue';
import ShowIssue from '~/pages/ShowIssue';
import ConfirmDelivery from '~/pages/ConfirmDelivery';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import DeliveryDetail from '~/pages/DeliveryDetail';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function NewStack() {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerTransparent: true,
        headerLeftContainerStyle: {
          marginLeft: 20,
        },
      }}
    >
      <Tabs.Screen
        name="Dashboard"
        component={Dashboard}
      />
      <Stack.Screen
        name="DeliveryDetail"
        component={DeliveryDetail}
        options={{
          title: 'Detalhes da encomenda',
          headerLeft: ({ navigation }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Icon name="chevron-left" size={20} color="#FFF" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="ReportIssue"
        component={ReportIssue}
        options={{
          title: 'Informar problema',
          headerLeft: ({ navigation }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Icon name="chevron-left" size={20} color="#FFF" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="ShowIssue"
        component={ShowIssue}
        options={{
          title: 'Visualizar problemas',
          headerLeft: ({ navigation }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Icon name="chevron-left" size={20} color="#FFF" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Confirmar entrega"
        component={ConfirmDelivery}
        options={{
          title: 'Confirmar entrega',
          headerLeft: () => (
            <TouchableOpacity
              onPress={({ navigation }) => {
                navigation.goBack();
              }}
            >
              <Icon name="chevron-left" size={20} color="#FFF" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default function createRouter(isSigned = false) {
  return !isSigned ? (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Logon" component={Logon} />
    </Stack.Navigator>
  ) : (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: '#7159c1',
        inactiveTintColor: 'rgba(0, 0, 0, 0.2)',
        style: {
          backgroundColor: '#FFF',
        },
        keyboardHidesTabBar: true,
      }}
    >
      <Tabs.Screen
        name="New"
        component={NewStack}
        options={{
          tabBarLabel: 'Entregas',
          tabBarIcon: ({ color }) => (
            <Icon name="format-align-justify" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Meu perfil"
        component={Profile}
        options={{
          tabBarLabel: 'Meu perfil',
          tabBarIcon: ({ color }) => (
            <Icon name="account-circle" size={20} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
