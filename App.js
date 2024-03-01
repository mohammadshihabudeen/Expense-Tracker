import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import IconButton from './components/ui/IconButton';
import AllExpensesScreen from './screens/AllExpensesScreen';
import RecentExpensesScreen from './screens/RecentExpensesScreen';
import ManageExpensesScreen from './screens/ManageExpensesScreen';
import { GlobalStyles } from './constants/styles';
import { useNavigation } from '@react-navigation/native';
import ExpensesContextProvider from './store/expenses-context';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainScreen() {
  return (
    <Tab.Navigator
    screenOptions={({ navigation }) => ({
      headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
      headerTintColor: 'white',
      tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
      tabBarActiveTintColor: GlobalStyles.colors.accent500,
      headerRight: ({ tintColor }) => (
        <IconButton
          icon="add"
          size={24}
          color={tintColor}
          onPress={() => {
            navigation.navigate('Manage Expenses');
          }}
        />
      ),
    })}
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
    <ExpensesContextProvider>
      <StatusBar style='light'/>
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: 'white',
      }}
      >
        <Stack.Screen name="All Expenses" component={MainScreen}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name="Manage Expenses" component={ManageExpensesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </ExpensesContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
