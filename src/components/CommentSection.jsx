import React, { useState } from 'react'
import { View, Button, TextInput, SectionList } from 'react-native'
import { useRoute } from '@react-navigation/native'

const CommentIndex = () => {
  const route = useRoute()
  let comment = route.params.comment

  return (
    <SectionList 
      renderItem={({item}) => <ListItem comment={item}/>}
    />
  )
}

const CommentSection = () => {
  const [newComment, setNewComment] = useState()

  return (
    <View 
      testID="comment-section"
      name="CommentSection"
    >
        <TextInput
          testID="comment-text"
          placeholder="white a comment"
          onChange={(text) => setNewComment(text)}
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
