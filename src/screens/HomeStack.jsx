import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import styles from '../styles/styles'
import CommentSection from '../components/CommentSection'
import HomeScreen from '../components/HomeScreen'
import { Image } from 'react-native'

const Stack = createStackNavigator()

const image = require('../images/HeaderLogo.png')

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          headerTitle: () => (
            <Image source={image} style={styles.appTitle} />
          ),
          headerStyle: styles.mainHeader,
        }}
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
