import React from 'react'
import { View, Button, FlatList, Text } from 'react-native'
import { useRoute } from '@react-navigation/native'


const CommentSection = () => {
  const route = useRoute()
  const comments = route.params.post.comments

  const SingleComment = ({ content }) => (
    <View>
      <Text testID='single-comment'>{content}</Text>
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
      <Button testID='comment-submit' title='Comment' />
    </View>
  )
}

export default CommentSection
