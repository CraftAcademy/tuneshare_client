import React, { useState } from 'react'
import { View, TextInput, Text, Pressable } from 'react-native'
import Auth from '../modules/AuthDevise'
import { showMessage } from 'react-native-flash-message'
import { Fontisto } from '@expo/vector-icons'

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
    <View testID='login-screen'>
      <TextInput
        testID='login-email'
        placeholder='Enter the email you use for your spotify account'
        onChangeText={text => setEmail(text)}
      />
      <Pressable
        testID='login-submit'
        hitSlop={styles.loginHitSlop}
        style={styles.loginSubmit}
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
                  duration: 2000,
                })
              : showMessage({
                  message: message,
                  type: 'warning',
                  autoHide: true,
                  duration: 6000,
                  hideOnPress: true,
                })
          }
        }}
      >
        <Fontisto name='spotify' style={styles.loginButton} />
        <Text>Login</Text>
      </Pressable>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})
