import React, { useState, useEffect } from 'react'
import { View, Button, TextInput, FlatList } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import Comments from '../modules/CommentService'

const SingleComment = ({ postComments }) => {
  return (
    <View>
      <Text>{postComments.content}</Text>
    </View>
  )
}

const CommentIndex = () => {
  const route = useRoute()
  const postId = route.params.post.id
  const { postComments } = useSelector(state => state)

  useEffect(async () => {
    let response
    await Comments.index(postId)
    return response
  }, [])

  return (
    <View>
      <FlatList
        data={postComments}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <SingleComment postComment={item} />}
      />
    </View>
  )
}

const CommentSection = () => {
  const [newComment, setNewComment] = useState()

  return (
    <View testID='comment-section' name='CommentSection'>
      <CommentIndex />
      <TextInput
        testID='comment-text'
        placeholder='white a comment'
        onChange={text => setNewComment(text)}
      />
      <Button testID='comment-submit' title='Comment' />
    </View>
  )
}

export default CommentSection
