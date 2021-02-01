import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import PostForm from './src/components/PostForm'
import LoginScreen from './src/components/LoginScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStack from './src/screens/HomeStack'

const Tab = createBottomTabNavigator()

const App = () => {
  const { authenticated } = useSelector(state => state)
  if (authenticated) {
    return (
      <NavigationContainer style={{ height: 10 }}>
        <Tab.Navigator>
          <Tab.Screen name='Feed' component={HomeStack} />
          <Tab.Screen name='Post' component={PostForm} />
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
            options={{
              title: 'Log In To TuneShare',
              headerStyle: styles.mainHeader,
              headerTitleStyle: styles.appTitle,
            }}
          />
        </Stack.Navigator>
        <FlashMessage testID='flash-message' position='center' />
      </NavigationContainer>
    )
  }
}

export default App
