import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import AllExpensesScreen from './screens/AllExpensesScreen';
import RecentExpensesScreen from './screens/RecentExpensesScreen';
import ManageExpensesScreen from './screens/ManageExpensesScreen';
import { GlobalStyles } from './constants/styles';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainScreen() {
  return (
    <Tab.Navigator
      screenOptions={
        {
          headerStyle: {
            backgroundColor: GlobalStyles.colors.primary400
          },
          headerTintColor: "white",
          tabBarStyle: {
            backgroundColor: GlobalStyles.colors.primary400
          },
          tabBarActiveTintColor: GlobalStyles.colors.accent500
        }
      }
    >

      <Tab.Screen name="Recent Expenses" component={RecentExpensesScreen}
        options={
          {
            title: "Recent Expenses",
            tabBarLabel: "Recent Expenses",
            tabBarIcon: (({ color, size }) =>
              <Ionicons name="hourglass" size={size} color={color} />
            )
          }
        }
      />
      <Tab.Screen name="Expenses" component={AllExpensesScreen}
        options={
          {
            title: "All Expenses",
            tabBarLabel: "All Expenses",
            tabBarIcon: (({ color, size }) =>
              <Ionicons name="calendar" size={size} color={color} />
            )
          }
        }
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator>
        <Stack.Screen name="All Expenses" component={MainScreen}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name="Manage Expenses" component={ManageExpensesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
