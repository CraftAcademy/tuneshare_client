import React, { useState } from 'react'
import {
  TextInput,
  ImageBackground,
  TouchableHighlight,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native'
import { ListItem, Card } from 'react-native-elements'
import TrackService from '../modules/TrackService'
import TrackPlayer from './TrackPlayer'
import { useSelector } from 'react-redux'
import store from '../state/store/store'
import styles from '../styles/styles'
import PostService from '../modules/PostService'
import { Ionicons } from '@expo/vector-icons'

const PostForm = props => {
  const [search, setSearch] = useState()
  const [description, setDescription] = useState()
  const { searchResult, trackDetails, errorMessage, credentials } = useSelector(
    state => state
  )

  const image = require('../images/image.png')
  return (
    <SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>
      <ImageBackground source={image} style={styles.loginImage}>
        <View style={styles.inputContent}>
          <TextInput
            testID='searchInput'
            style={{ color: '#40E0D0', paddingLeft: 4 }}
            placeholder='Search a song to create a post!'
            placeholderTextColor='#ffffff'
            onChangeText={text => setSearch(text)}
            value={search || ''}
          />
          <TouchableHighlight
            style={styles.searchButton}
            testID='searchButton'
            onPress={() => TrackService.index(search)}
          >
            <Ionicons name='md-search-circle-sharp' size={42} color='white' />
            <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Search</Text>
          </TouchableHighlight>
        </View>
        <FlatList
          testID='searchResults'
          data={searchResult}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <ListItem
              style={styles.searchResultBox}
              testID={`result-${item.id}`}
              onPress={() =>
                store.dispatch({
                  type: 'SET_TRACK_DETAILS',
                  payload: {
                    track: item.track,
                    artists: item.artists,
                    image: item.image,
                    preview: item.preview,
                  },
                })
              }
            >
              <ListItem.Title>{item.track}</ListItem.Title>
              <ListItem.Subtitle>{item.artists}</ListItem.Subtitle>
            </ListItem>
          )}
        />
        <View style={styles.formContent}>
          {trackDetails && (
            <>
              <Card testID='trackPreview'>
                <Card.Title style={styles.track}>
                  {trackDetails.track}
                </Card.Title>
                <Card.Title style={styles.artists}>
                  {trackDetails.artists}
                </Card.Title>
                <Card.Divider />
                <Card.Image
                  style={styles.image}
                  source={{ uri: trackDetails.image }}
                >
                  <TrackPlayer post={trackDetails} />
                </Card.Image>
              </Card>
              <TextInput
                style={styles.postDescription}
                placeholder='Write a caption!'
                testID='descriptionInput'
                onChangeText={text => setDescription(text)}
              />
              <TouchableHighlight
                style={styles.postButton}
                testID='postButton'
                color='black'
                onPress={() =>
                  PostService.create(
                    trackDetails,
                    description,
                    props.navigation.navigate,
                    credentials
                  )
                }
              >
                <Text>Post</Text>
              </TouchableHighlight>
            </>
          )}
          <Text testID='errorMessage'>{errorMessage}</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default PostForm
