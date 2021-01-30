import React, {useState} from 'react'
import { Text, View, Button, TextInput } from 'react-native'

const CommentSection = () => {
  const [comment, setComment] = useState()
  return (
    <View testID="comment-section">
      <TextInput 
        testID="comment-text"
        placeholder="white a comment"
        onChange={text => setComment(text)}
      />
      <Button 
        testID="comment-submit"
        title="Comment"
        onPress={}
      />
    </View>
  )
}

export default CommentSection
