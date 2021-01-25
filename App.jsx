import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './src/components/HomeScreen'
import { useSelector } from 'react-redux'

const Stack = createStackNavigator()

const App = () => {
  const { appTitle } = useSelector(state => state)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: appTitle }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <View>
    //   <Text>TuneShare</Text>
    //   <StatusBar style="auto" />
    // </View>
  )
}

export default App
