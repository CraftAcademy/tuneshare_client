import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { FlatList, View, ImageBackground } from 'react-native'
import PostService from '../modules/PostService'
import PostIndex from './PostIndex'
import styles from '../styles/styles'

const HomeScreen = () => {
  const { posts } = useSelector(state => state)
  const image = require('../images/image.png')
  useEffect(() => {
    PostService.index()
  }, [])

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <ImageBackground source={image} style={styles.loginImage}>
      <FlatList
        testID='post-index'
        data={posts}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <PostIndex post={item} />}
      />
      </ImageBackground>
    </View>
  )
}

export default HomeScreen
