import React, { useState } from 'react'
import { View, Button, TextInput, FlatList } from 'react-native'
import { useRoute } from '@react-navigation/native'
import {useSelector} from 'react-redux'
import Comments from '../modules/CommentService'

const SingleComment = () => {
  const route = useRoute()
  let comment = route.params.comment
  return (
    <View>
      <Text>{comment}</Text>
    </View>
  )
}

const CommentIndex = (props) => {
  const { post_id } = props.route.params.post  
  const { postComments } = useSelector(state => state)

  useEffect(() => {
    Comments.index(post_id)
  }, [post_id])
  return (
    <View>
    <FlatList
    data={postComments}
     keyExtractor={(item, index) => index.toString()}
    renderItem={({item}) => (<SingleComment comment={item}/>)}
    />
    </View>
  )
}

const CommentSection = () => {
  const [newComment, setNewComment] = useState()

  return (
    <View 
      testID="comment-section"
      name="CommentSection"
    >
      <CommentIndex />
        <TextInput
          testID="comment-text"
          placeholder="white a comment"
          onChange={(text) => setNewComment(text)}
        />
        <Button
          testID="comment-submit"
          title="Comment"
        />
    </View>
  )
}

export default CommentSection
