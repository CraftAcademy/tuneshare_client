import React, { useState } from 'react'
import { View, TextInput, Button  } from 'react-native'
import Auth from '../modules/AuthDevise'
import { showMessage } from 'react-native-flash-message'
import { Fontisto } from '@expo/vector-icons'
import styles from '../styles/styles'

const LoginScreen = props => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState()
  const deviseAuth = new Auth({
    host: 'http://localhost:3000/api',
  })

  const authWithDevise = async () => {
    await deviseAuth
      .signIn(email)
      .then(res => {
        props.navigation.navigate('HomeScreen')
        setMessage()
      })
      .catch(e => {
        setMessage(e.response.data.errors)
      })
  }

  return (
    <View style={styles.container} testID='login-screen'>
      <TextInput
        testID='login-email'
        style={styles.searchInput}
        placeholder='Enter the email you use for your spotify account'
        onChangeText={text => setEmail(text)}
      />
      <Button
        testID='login-submit'
        hitSlop={styles.loginHitSlop}
        style={styles.loginButton}
        onPress={() => {
          authWithDevise()
          {
            !message
              ? showMessage({
                  message: 'Welcome to TuneShare...',
                  description: 'Now share some tunes!',
                  type: 'success',
                  autoHide: true,
                  icon: 'fm_icon_success@3x.png',
                  backgroundColor: '#833AB4',
                  color: '#FFDC80',
                  opacity: 0.9,
                  duration: 3000,
                })
              : showMessage({
                  message: message,
                  type: 'warning',
                  autoHide: true,
                  duration: 6000,
                  backgroundColor: "#E50914",
                  color: "#C13584",
                  opacity: 0.9,
                  hideOnPress: true,
                })
          }
        }}
      >
        Login
      </Button>
    </View>
  )
}

export default LoginScreen

