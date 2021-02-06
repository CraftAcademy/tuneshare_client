import React from 'react'
import { AppLoading } from 'expo'
import {  Text, View } from 'react-native'
import { Pacifico_400Regular, useFonts } from '@expo-google-fonts/pacifico'

const TuneShareLogo = () => {
  let [fontsLoaded] = useFonts({
    Pacifico_400Regular,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
        <Text
          style={{
            fontSize: 42,
            paddingVertical: 2,
            color: '#ed8f0e',
            textShadowColor: '#ffde8c',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 0.8,
            fontFamily: 'Pacifico_400Regular',
          }}
        >
          TuneShare
        </Text>
      </View>
    )
  }
}

export default TuneShareLogo

