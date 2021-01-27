import React, { useState } from 'react'
import { StyleSheet, Text, ScrollView, TextInput, Button, FlatList } from 'react-native'
import { ListItem, SearchBar } from 'react-native-elements'
import TrackService from '../modules/TrackService'
import { useSelector } from 'react-redux'

const PostForm = () => {
  const [search, setSearch] = useState()
  const { searchResult } = useSelector(state => state)

  return (
    <ScrollView>
      <Text>New post!</Text>
      <SearchBar
        placeholder='Search here...'
        onChangeText={text => {
          TrackService.index(text);
          setSearch(text);
        }}
        value={search}
      />
      <FlatList
        data={searchResult}
        renderItem={({ item }) => (
          <ListItem>
            <ListItem.Title>
              {item.track}
            </ListItem.Title>
            <ListItem.Subtitle>
              {item.artists}
            </ListItem.Subtitle>
          </ListItem>
        )}
        keyExtractor={item => item.preview}
      />
      <TextInput placeholder='Text' />
      <Button title='Submit' />
    </ScrollView>
  )
}

export default PostForm

const styles = StyleSheet.create({})
