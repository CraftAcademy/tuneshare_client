import React, { useState } from 'react'
import { View, TextInput, Text, Pressable } from 'react-native'
import Auth from '../modules/AuthDevise'
import { showMessage } from 'react-native-flash-message'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const deviseAuth = new Auth({
    host: 'http://localhost:3000/api'
  })


  return (
    <View>
      <TextInput 
      />
      <Pressable>
        <Text>Login</Text>
      </Pressable>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})
