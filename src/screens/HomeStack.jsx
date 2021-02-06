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
        options={() => ({
          title: 'Comment Sloth',
          headerStyle: { backgroundColor: '#e7e0ff' },
          headerTitleStyle: {
            color: '#3e246e',
            textShadowColor: '#d3ebf2',
            textShadowRadius: 0.5,
            fontFamily: 'HiraginoSans-W6',
          },
        })}
        name='CommentSection'
        component={CommentSection}
      />
    </Stack.Navigator>
  )
}

export default HomeStack
