import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useSelector } from 'react-redux'
import styles from '../styles/styles'
import SinglePost from '../components/SinglePost'
import UserProfile from '../components/UserProfile'

const Stack = createStackNavigator()

const HomeStack = () => {
  const { userEmail } = useSelector(state => state)

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='UserProfile'
        component={UserProfile}
        options={() => ({
          title: userEmail,
          headerStyle: styles.mainHeader,
          headerTitleStyle: styles.appTitle,
        })}
      />
      <Stack.Screen name='SinglePost' component={SinglePost} />
    </Stack.Navigator>
  )
}

export default HomeStack
