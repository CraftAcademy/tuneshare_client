import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import { SearchBar } from 'react-native-elements'

const PostForm = () => {
  const [search, setSearch] = useState()

  return (
    <View>
      <SearchBar
      placeholder="Search here..."
      onChangeText={(text) => setSearch(text)}
      value={search}
      />
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
