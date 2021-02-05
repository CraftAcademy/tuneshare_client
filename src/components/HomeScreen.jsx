import React, { useEffect, useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import {
  FlatList,
  View,
  ImageBackground,
  ScrollView,
  RefreshControl,
} from 'react-native'
import PostService from '../modules/PostService'
import PostIndex from './PostIndex'
import styles from '../styles/styles'

const HomeScreen = () => {
  const [refreshing, setRefreshing] = useState(false)
  const { posts } = useSelector(state => state)
  const image = require('../images/image.png')
  useEffect(() => {
    PostService.index()
  }, [])

  const refreshFeed = useCallback(async () => {
    setRefreshing(true)
    await PostService.index().then(() => {
      setRefreshing(false)
    })
  }, [])

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refresh={refreshing} onRefresh={refreshFeed} />
      }
    >
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <ImageBackground source={image} style={styles.loginImage}>
          <FlatList
            testID='post-index'
            data={posts}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <PostIndex post={item} />}
          />
        </ImageBackground>
      </View>
    </ScrollView>
  )
}

export default HomeScreen
