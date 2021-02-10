import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import PostForm from './src/components/PostForm'
import LoginScreen from './src/components/LoginScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import HomeStack from './src/screens/HomeStack'
import { useSelector } from 'react-redux'
import styles from './src/styles/styles'
import FlashMessage from 'react-native-flash-message'
import ProfileStack from './src/screens/ProfileStack'
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const App = () => {
  const { authenticated } = useSelector(state => state)
  if (authenticated) {
    return (
      <NavigationContainer style={{ height: 10 }}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: () => {
              if (route.name === 'Feed') {
                return (
                  <Ionicons
                    name='musical-notes'
                    size={28}
                    color='#4b1e8a'
                  />
                );
              } else if (route.name === 'Post') {
                return (
                  <Ionicons
                    name='md-add-circle-outline'
                    size={28}
                    color='#4b1e8a'
                  />
                );
              } else if (route.name === 'Profile') {
                return (
                  <Ionicons
                    name='ios-person-circle-outline'
                    size={28}
                    color='#4b1e8a'
                  />
                )
              }
            },
          })}
          tabBarOptions={{
            activeTintColor: 'purple',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen
            name='Feed'
            component={HomeStack}
          />
          <Tab.Screen
            name='Post'
            component={PostForm}
          />
          <Tab.Screen
            name='Profile'
            component={ProfileStack}
          />
        </Tab.Navigator>
      </NavigationContainer>
    )
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Login'
            component={LoginScreen}
            testID='login-screen'
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
        <FlashMessage testID='flash-message' position='center' />
      </NavigationContainer>
    )
  }
}

export default App
