import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useSelector } from 'react-redux'
import styles from '../styles/styles'
import CommentSection from '../components/CommentSection'
import HomeScreen from '../components/HomeScreen'

const Stack = createStackNavigator()

const HomeStack = () => {
  const { appTitle } = useSelector(state => state)
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={() => ({
          title: appTitle,
          headerStyle: styles.mainHeader,
          headerTitleStyle: styles.appTitle,
        })}
      />
      <Stack.Screen
        name="CommentSection"
        component={CommentSection}
      />
    </Stack.Navigator>
  )
}

export default HomeStack