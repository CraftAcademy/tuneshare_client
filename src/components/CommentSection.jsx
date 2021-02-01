import React, { useState } from 'react'
import { View, Button, FlatList, Text, TextInput } from 'react-native'
import { useRoute } from '@react-navigation/native'
import styles from '../styles/styles'

const CommentSection = () => {
  const route = useRoute()
  const comments = route.params.post.comments
  const [newComment, setNewComment] = useState()

  const SingleComment = ({ content }) => (
    <View>
      <Text testID='comment-text'>{content}</Text>
    </View>
  )
  const renderComment = ({ item }) => (
    <SingleComment  content={item.content} />
  )

  return (
    <View testID='comment-section' name='CommentSection'>
      <FlatList
        data={comments}
        keyExtractor={item => item.id.toString()}
        renderItem={renderComment}
      />
      <TextInput
        testID='comment-text'
        placeholder='Share your thoughts...'
        onChange={text => setNewComment(text)}
      />
      <Button testID='comment-submit' title='Comment' />
    </View>
  )
}

export default CommentSection
