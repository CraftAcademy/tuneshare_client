import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './src/components/HomeScreen'
import { useSelector } from 'react-redux'

import PostForm from './src/components/PostForm'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const App = () => {
  const { appTitle } = useSelector(state => state)
  return (
    <>
      {/* <NavigationContainer> */}
      {/* </NavigationContainer> */}
          {/* <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={() => ({ title: appTitle })}
            />
          </Stack.Navigator> */}
      <NavigationContainer style={{ height: 10 }}>
        <Tab.Navigator>
          <Tab.Screen name="Feed" component={HomeScreen} />
          <Tab.Screen name="Post" component={PostForm} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App
