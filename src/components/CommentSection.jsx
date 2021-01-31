import React, { useState } from 'react'
import { View, Button, TextInput, FlatList, Text } from 'react-native'
import { useRoute } from '@react-navigation/native'


const CommentSection = () => {
  const [newComment, setNewComment] = useState()
  const route = useRoute()
  const comments = route.params.post.comments

  const SingleComment = ({ content }) => (
    <View>
      <Text>{content}</Text>
    </View>
  )
  const renderComment = ({ item }) => <SingleComment content={item.content} />

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
