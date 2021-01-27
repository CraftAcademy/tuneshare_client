import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import { SearchBar } from 'react-native-elements'

const PostForm = () => {
  return (
    <View>
      <SearchBar
      placeholder="Search here..."/>
      <Text>
       New post!
      </Text>
      <TextInput
      placeholder="Text"
      />
      <Button
      title="Submit"/>
    </View>
  )
}

export default PostForm

const styles = StyleSheet.create({})
