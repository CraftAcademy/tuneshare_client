import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native'
import Auth from '../modules/AuthDevise'
import { showMessage } from 'react-native-flash-message'
import styles from '../styles/styles'
import { LinearGradient } from 'expo-linear-gradient'
import { Fontisto } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';
import AsyncStorage from '@react-native-community/async-storage'


const LoginScreen = (props) => {
  const storage = AsyncStorage
  const storageKey = 'auth-storage'
  const [response, setResponse] = useState(null);

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginMessage, setLoginMessage] = useState()
  const dispatch = useDispatch()
  const deviseAuth = new Auth({
    host: 'https://tuneshare-2021.herokuapp.com',
  })

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
  }, [response]);

  const authWithSpotify = async () => {
    let resp = await WebBrowser.openAuthSessionAsync(
      `https://tuneshare-2021.herokuapp.com/auth/spotify?redirect_url=${encodeURIComponent(Linking.makeUrl())}`
    );
    setResponse(resp);
  };

  const image = require('../images/image.png')

  return (
    <View style={{ flex: 1, flexDirection: 'column' }} testID="login-screen">
      <ImageBackground source={image} style={styles.loginImage}>
        <TouchableOpacity
          raised="true"
          testID="login-submit"
          hitSlop={styles.loginHitSlop}
          style={styles.loginSubmit}
          onPress={() => {
            authWithSpotify()
            {
              !loginMessage &&
                showMessage({
                  message: 'Welcome to TuneShare...',
                  description: 'Now share some tunes!',
                  type: 'success',
                  autoHide: true,
                  backgroundColor: '#833AB4',
                  color: '#FFDC80',
                  opacity: 0.7,
                  duration: 3000,
                })
            }
          }}
        >
          <LinearGradient
            colors={['#dd3e54', '#6be585']}
            start={{ x: 0.1, y: 0.3 }}
            end={{ x: 0.2, y: 1.0 }}
            locations={[0.1, 0.8]}
            style={styles.linearGradient}
          >
            <Text style={styles.buttonContent}>
              Sign In With Spotify
                <Fontisto
                name="spotify"
                style={{ paddingLeft: 16 }}
                color="#ffffff"
                size={24}
              />
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        {loginMessage &&
          showMessage({
            message: loginMessage,
            type: 'warning',
            autoHide: true,
            duration: 6000,
            backgroundColor: '#E50914',
            color: '#C13584',
            opacity: 0.5,
            hideOnPress: true,
          })}
      </ImageBackground>
    </View>
  )
}

export default LoginScreen
