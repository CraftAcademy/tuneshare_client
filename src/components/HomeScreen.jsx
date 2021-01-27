import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { FlatList, View } from 'react-native'
import PostService from '../modules/PostService'
import PostIndex from './PostIndex'
import styles from '../styles/styles'

const HomeScreen = () => {
  const { posts } = useSelector(state => state)

  useEffect(() => {
    PostService.index()
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        testID='post-index'
        data={posts}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <PostIndex post={item} />}
      />
    </View>
  )
}

export default HomeScreen
