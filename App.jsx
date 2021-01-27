import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './src/components/HomeScreen'
import { useSelector } from 'react-redux'
import styles from './src/styles/styles'

const Stack = createStackNavigator()

const App = () => {
  const { appTitle } = useSelector(state => state)
  return (
    <NavigationContainer>
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
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
