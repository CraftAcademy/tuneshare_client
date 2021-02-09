import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import styles from '../styles/styles'
import { Fontisto } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import * as WebBrowser from 'expo-web-browser'
import * as Linking from 'expo-linking'
import AsyncStorage from '@react-native-community/async-storage'
// import Auth from '../modules/AuthDevise'
// import { showMessage } from 'react-native-flash-message'
// import { LinearGradient } from 'expo-linear-gradient'

const LoginScreen = (props) => {
  const storage = AsyncStorage
  const storageKey = 'auth-storage'
  const [response, setResponse] = useState(null)
  const dispatch = useDispatch()
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [loginMessage, setLoginMessage] = useState()
  // const deviseAuth = new Auth({
  //   host: 'https://tuneshare-2021.herokuapp.com',
  // })

  useEffect(() => {
    if (response?.type === 'success') {
      let payload = JSON.parse(decodeURI(response.url.split('?data=')[1]))
      storage.setItem(storageKey, JSON.stringify(payload.dta_credentails))
      props.navigation.navigate('HomeScreen')
      dispatch({
        type: 'SET_CURRENT_USER',
        payload: {
          currentUser: payload.data,
          authenticated: true,
        },
      })
    }
  }, [response])

  const authWithSpotify = async () => {
    let resp = await WebBrowser.openAuthSessionAsync(
      `https://tuneshare-2021.herokuapp.com/auth/spotify?redirect_url=${encodeURIComponent(
        Linking.makeUrl()
      )}`
    )
    setResponse(resp)
  }

  // const authWithDevise = async () => {
  //   await deviseAuth
  //     .signIn(email, password)
  //     .then(resp => {
  //       props.navigation.navigate('HomeScreen')
  //       dispatch({
  //         type: 'SET_CURRENT_USER',
  //         payload: {
  //           authenticated: true,
  //         },
  //       })
  //     })
  //     .catch(error => {
  //       setLoginMessage(error.response.data.errors[0])
  //     })
  // }

  const image = require('../images/image.png')

  return (
    <View style={{ flex: 1, flexDirection: 'column' }} testID="login-screen">
      <ImageBackground source={image} style={styles.loginImage}>
        {/* <TextInput
          testID="login-email"
          placeholderTextColor="white"
          style={styles.loginInput}
          placeholder="Enter your email..."
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          testID="login-password"
          placeholderTextColor="white"
          secureTextEntry={true}
          style={styles.loginInput}
          placeholder="Enter your password..."
          onChangeText={(text) => setPassword(text)}
        /> */}
        <TouchableOpacity
          raised="true"
          testID="login-submit"
          hitSlop={styles.loginHitSlop}
          style={styles.loginSubmit}
          onPress={() => {
            authWithSpotify()
            // authWithDevise()
          }}
        >
          <Text
          // style={styles.buttonContent}
          >
            <Fontisto
              name="spotify"
              style={{
                paddingLeft: 32,
                paddingTop: 12,
                paddingBottom: 12,
                paddingRight: 32,
              }}
              color="#ffffff"
              size={77}
            />
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

export default LoginScreen
