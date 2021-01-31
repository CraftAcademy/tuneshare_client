import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import PostForm from './src/components/PostForm'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStack from './src/screens/HomeStack'

const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <>
      <NavigationContainer style={{ height: 10 }}>
        <Tab.Navigator>
          <Tab.Screen name='Feed' component={HomeStack} />
          <Tab.Screen name='Post' component={PostForm} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App
