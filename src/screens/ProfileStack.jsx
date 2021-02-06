import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import styles from '../styles/styles'
import SinglePost from '../components/SinglePost'
import UserProfile from '../components/UserProfile'

const Stack = createStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='UserProfile'
        component={UserProfile}
        options={() => ({
          title: 'My Profile',
          headerStyle: styles.mainHeader,
          headerTitleStyle: styles.appTitle,
        })}
      />
      <Stack.Screen name='SinglePost' component={SinglePost} />
    </Stack.Navigator>
  )
}

export default HomeStack
