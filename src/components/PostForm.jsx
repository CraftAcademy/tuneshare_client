import React, { useState } from 'react'
import { TextInput, Button, FlatList, SafeAreaView } from 'react-native'
import { ListItem } from 'react-native-elements'
import TrackService from '../modules/TrackService'
import { useSelector } from 'react-redux'
import store from '../state/store/store'

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
          <ListItem
            testID={`result-${item.id}`}
            onPress={() => store.dispatch({ type: 'CLEAR_SEARCH_INDEX' })}
          >
            <ListItem.Title>{item.track}</ListItem.Title>
            <ListItem.Subtitle>{item.artists}</ListItem.Subtitle>
          </ListItem>
        )}
      />
    </SafeAreaView>
  )
}

export default PostForm
