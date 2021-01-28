import React, { useState } from 'react'
import { StyleSheet, Text, ScrollView, TextInput, Button, FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'
import TrackService from '../modules/TrackService'
import { useSelector } from 'react-redux'

const PostForm = () => {
  const [search, setSearch] = useState()
  const { searchResult } = useSelector(state => state)

  return (
    <ScrollView>
      <Text>New post!</Text>
      <TextInput
        testID='searchInput'
        placeholder='Search here...'
        onChangeText={text => setSearch(text)}
        value={search || ''}
      />
      <Button
        testID='searchButton'
        title="Search"
        onPress={() => TrackService.index(search)}
      />
      <FlatList
        testID='searchResults'
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
          keyExtractor={item => item.id}
        />
      <TextInput placeholder='Text' />
      <Button title='Submit' />
    </ScrollView>
  )
}

export default PostForm

const styles = StyleSheet.create({})
