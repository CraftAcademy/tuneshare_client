import React, { useEffect, useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import {
  View,
  Button,
  FlatList,
  Text,
  TextInput,
  ScrollView,
  RefreshControl,
} from 'react-native'
import { useRoute } from '@react-navigation/native'
import Comments from '../modules/CommentService'

const CommentSection = () => {
  const [refreshing, setRefreshing] = useState(false)
  const route = useRoute()
  const post = route.params.post
  const { comments, credentials } = useSelector(state => state)
  const [newComment, setNewComment] = useState('')

  useEffect(() => {
    Comments.index(post.id)
  }, [])

  const refreshComments = useCallback(async () => {
    setRefreshing(true)
    await Comments.index(post.id).then(() => {
      setRefreshing(false)
    })
  }, [])

  const SingleComment = ({ content }) => <Text>{content}</Text>
  const renderComment = ({ item }) => <SingleComment content={item.content} />

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refresh={refreshing} onRefresh={refreshComments} />
      }
    >
      <View testID='comment-section' name='CommentSection'>
        <FlatList
          data={comments}
          keyExtractor={item => item.id.toString()}
          renderItem={renderComment}
        />
        <TextInput
          testID='comment-input'
          placeholder='Share your thoughts...'
          onChangeText={text => setNewComment(text)}
          clearButtonMode='always'
        />
        <Button
          testID='comment-submit'
          title='Comment'
          onPress={() => {
            Comments.create(post.id, credentials, newComment)
          }}
        />
      </View>
    </ScrollView>
  )
}

export default CommentSection
