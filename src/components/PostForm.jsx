import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import { ListItem, SearchBar } from 'react-native-elements'
import { FlatList } from 'react-native-gesture-handler'
import TrackService from '../modules/TrackService'
import { useSelector } from 'react-redux'

const PostForm = () => {
  //const [search, setSearch] = useState()

  const { searchResult } = useSelector(state => state)

  // useEffect(() => {
  //   TrackService.index(index)
  // }, [])

  return (
    <View>
      <SearchBar
        placeholder='Search here...'
        onChangeText={text => {
          TrackService.index(text)
          //setSearch(text)
        }}
        //value={search}
      />
      <Text>New post!</Text>
      <TextInput placeholder='Text' />
      <Button title='Submit' />
      <FlatList
        data={searchResult}
        renderItem={({ item }) => (
          <ListItem
            track={item.track}
            artitsts={item.artitsts}
            image={item.image}
            preview={item.preview}
          />
        )}
        keyExtractor={item => item.preview}
      />
    </View>
  )
}

export default PostForm

const styles = StyleSheet.create({})
