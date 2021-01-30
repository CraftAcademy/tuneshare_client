import React, { useState } from 'react'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import Auth from '../modules/AuthDevise'
import { showMessage } from 'react-native-flash-message'
import styles from '../styles/styles'
import { LinearGradient } from 'expo-linear-gradient'
import { Fontisto } from '@expo/vector-icons'

const LoginScreen = props => {
  const [email, setEmail] = useState('')
  const [errorMessage, setErrorMessage] = useState()
  const deviseAuth = new Auth({
    host: 'http://localhost:3000',
  })

  const authWithDevise = async () => {
    await deviseAuth
      .signIn(email)
      .then(resp => {
        props.navigation.navigate('HomeScreen')
        setMessage()
      })
      .catch(e => {
        setErrorMessage(e.response.data.errors)
      })
  }

  return (
    <View testID='login-screen'>
      <TextInput
        testID='login-email'
        style={styles.loginInput}
        placeholder='Enter the email you use for your spotify account'
        onChangeText={text => setEmail(text)}
      />
      <TouchableOpacity
        raised='true'
        testID='login-submit'
        hitSlop={styles.loginHitSlop}
        style={styles.loginSubmit}
        // investigate actual error response data to render message or change ternary //
        onPress={() => {
          authWithDevise()
          {
            !errorMessage
              ? showMessage({
                  message: 'Welcome to TuneShare...',
                  description: 'Now share some tunes!',
                  type: 'success',
                  autoHide: true,
                  backgroundColor: '#833AB4',
                  color: '#FFDC80',
                  opacity: 0.7,
                  duration: 3000,
                })
              : showMessage({
                  message: message,
                  type: 'warning',
                  autoHide: true,
                  duration: 6000,
                  backgroundColor: '#E50914',
                  color: '#C13584',
                  opacity: 0.5,
                  hideOnPress: true,
                })
          }
        }}
      >
        <LinearGradient
          colors={['#B7FFBF', '#26D701', '#00C301', '#00AB08', '#006400']}
          style={styles.linearGradient}
        >
          <Text style={styles.buttonContent}>
            Sign In With Spotify{' '}
            <Fontisto
              name='spotify'
              style={{ paddingLeft: 16 }}
              color='#ffffff'
              size={24}
            />
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}

export default LoginScreen
