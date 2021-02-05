import React, { useEffect, useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import {
  View,
  TouchableOpacity,
  FlatList,
  Text,
  TextInput,
  ScrollView,
  RefreshControl,
} from 'react-native'
import { useRoute } from '@react-navigation/native'
import Comments from '../modules/CommentService'
import styles from '../styles/styles'

const CommentSection = () => {
  const [refreshing, setRefreshing] = useState(false)
  const route = useRoute()
  const post = route.params.post
  const { comments, credentials } = useSelector(state => state)
  const [newComment, setNewComment] = useState('')
  let colors = ['#123456', '#654321', '#fdecba', '#abcdef']

  useEffect(() => {
    Comments.index(post.id)
  }, [])

  const refreshComments = useCallback(async () => {
    setRefreshing(true)
    await Comments.index(post.id).then(() => {
      setRefreshing(false)
    })
  }, [])

  const SingleComment = ({ content }) => (
    <Text
      style={{
        maxWidth: 200,
        padding: 10,
        borderRadius: 20,
        alignSelf: 'flex-start',
      }}
    >
      {content}
    </Text>
  )
  const renderComment = ({ item }) => (
   
      <SingleComment content={item.content} />
  
  )

  return (
    <ScrollView
      style={{ flex: 1 }}
      refreshControl={
        <RefreshControl refresh={refreshing} onRefresh={refreshComments} />
      }
    >
      <View testID='comment-section' name='CommentSection'>
        <FlatList
          style={{
            margin: 8,
            flex: 1,
            flexDirection: 'row',
            backgroundColor: colors[index % colors.length],
            borderRadius: 300,
            padding: 5,
          }}
          data={comments}
          keyExtractor={(item, index) => index}
          renderItem={renderComment}
        />
        <View
          style={{
            flexDirection: 'row',
            height: 60,
            padding: 5,
            paddingHorizontal: 10,
          }}
        >
          <TextInput
            testID='comment-input'
            placeholder='Share your thoughts...'
            onChangeText={text => setNewComment(text)}
            clearButtonMode='always'
            style={{
              borderBottomColor: '#F5FCFF',
              backgroundColor: '#FFFFFF',
              borderRadius: 30,
              borderBottomWidth: 1,
              height: 40,
              flexDirection: 'row',
              alignItems: 'center',
              flex: 1,
              marginRight: 10,
            }}
          />
          <TouchableOpacity
            testID='comment-submit'
            title='Comment'
            style={{
              backgroundColor: '#00BFFF',
              width: 40,
              height: 40,
              borderRadius: 360,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => {
              Comments.create(post.id, credentials, newComment)
            }}
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default CommentSection
