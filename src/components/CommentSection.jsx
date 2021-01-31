import React, { useState } from 'react'
import { View, Button, TextInput, Text } from 'react-native'

const CommentSection = () => {
  const [comment, setComment] = useState()
  return (
    <View 
      testID="comment-section"
      name="CommentSection"
    >
        <Text>This is a comment</Text>
        <TextInput
          testID="comment-text"
          placeholder="white a comment"
          onChange={(text) => setComment(text)}
        />
        <Button
          testID="comment-submit"
          title="Comment"
          // onPress={}
        />
    </View>
  )
}

export default CommentSection
