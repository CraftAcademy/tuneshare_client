import React, { useState } from 'react'
import { TextInput, Button, FlatList, SafeAreaView } from 'react-native'
import { ListItem } from 'react-native-elements'
import TrackService from '../modules/TrackService'
import { useSelector } from 'react-redux'

const PostForm = () => {
  const [search, setSearch] = useState()
  const { searchResult } = useSelector(state => state)

  return (
    <SafeAreaView>
      <TextInput
        testID='searchInput'
        placeholder='Search here...'
        onChangeText={text => setSearch(text)}
        value={search || ''}
      />
      <Button
        testID='searchButton'
        title='Search'
        onPress={() => TrackService.index(search)}
      />
      <FlatList
        testID='searchResults'
        data={searchResult}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ListItem>
            <ListItem.Title>{item.track}</ListItem.Title>
            <ListItem.Subtitle>{item.artists}</ListItem.Subtitle>
          </ListItem>
        )}
      />
    </SafeAreaView>
  )
}

export default PostForm
