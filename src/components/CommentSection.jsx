import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { View, Button, FlatList, Text, TextInput } from 'react-native'
import { useRoute, useNavigationState } from '@react-navigation/native'
import styles from '../styles/styles'
import Comments from '../modules/CommentService'

const CommentSection = () => {
  const route = useRoute()
  const post = route.params.post
  const { credentials } = useSelector(state => state)
  const [newComment, setNewComment] = useState()
  const comments = useNavigationState(state => state.post.comments)

  const SingleComment = ({ content }) => (
    <View>
      <Text testID='comment-text'>{content}</Text>
    </View>
  )
  const renderComment = ({ item }) => <SingleComment content={item.content} />

  return (
    <View testID='comment-section' name='CommentSection'>
      <FlatList
        data={comments}
        keyExtractor={item => item.id.toString()}
        renderItem={renderComment}
        extraData={newComment}
      />
      <TextInput
        testID='comment-input'
        placeholder='Share your thoughts...'
        onChangeText={text => setNewComment(text)}
      />
      <Button
        testID='comment-submit'
        title='Comment'
        onPress={() => {
          Comments.create(post.id, credentials, newComment)
        }}
      />
    </View>
  )
}

export default CommentSection
