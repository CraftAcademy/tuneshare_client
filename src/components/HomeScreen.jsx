import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { FlatList, View } from 'react-native'
import PostService from '../modules/PostService'
import PostIndex from './PostIndex' 

const HomeScreen = () => {
  const { posts } = useSelector(state => state)

  useEffect(() => {
    PostService.index()
  }, [])

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({item}) => <PostIndex post={item} />} 
      />
    </View>
  )
}

export default HomeScreen
