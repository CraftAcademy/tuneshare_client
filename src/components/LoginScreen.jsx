import React, { useState } from 'react'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import Auth from '../modules/AuthDevise'
import { showMessage } from 'react-native-flash-message'
import styles from '../styles/styles'
import { LinearGradient } from 'expo-linear-gradient'
import { Fontisto } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'

const LoginScreen = props => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginMessage, setLoginMessage] = useState()
  const dispatch = useDispatch()
  const deviseAuth = new Auth({
    host: 'http://localhost:3000',
  })

  const authWithDevise = async () => {
    await deviseAuth
      .signIn(email, password)
      .then(resp => {
        props.navigation.navigate('HomeScreen')
        dispatch({
          type: 'SET_CURRENT_USER',
          payload: {
            authenticated: true,
          },
        })
      })
      .catch(error => {
        debugger
        setLoginMessage(error.response.data.errors[0])
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
      <TextInput
        testID='login-password'
        secureTextEntry={true}
        style={styles.loginInput}
        placeholder='Enter the password you use for your spotify account'
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity
        raised='true'
        testID='login-submit'
        hitSlop={styles.loginHitSlop}
        style={styles.loginSubmit}
        onPress={() => {
          authWithDevise()
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
              name='spotify'
              style={{ paddingLeft: 16 }}
              color='#ffffff'
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
    </View>
  )
}

export default LoginScreen
