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
  Dimensions,
  ImageBackground,
} from 'react-native'
import { useRoute } from '@react-navigation/native'
import Comments from '../modules/CommentService'
import { FontAwesome5 } from '@expo/vector-icons'
import styles from '../styles/styles'

const CommentSection = () => {
  const [refreshing, setRefreshing] = useState(false)
  const route = useRoute()
  const post = route.params.post
  const { comments, credentials } = useSelector(state => state)
  const [newComment, setNewComment] = useState('')

  const image = require('../images/commentSloth.png')

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
    <View
      style={{
        margin: 8,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#222152',
        borderRadius: 220,
        borderColor: '#5a58b8',
        borderBottomWidth: 3,
        borderRightWidth: 2,
        borderLeftWidth: 4,
        borderTopWidth: 1,
        padding: 10,
      }}
    >
      <Text
        style={{
          maxWidth: Dimensions.get('window').width * 0.8,
          paddingLeft: 12,
          alignSelf: 'flex-start',
          fontFamily: 'GillSans-SemiBold',
          color: '#defaeb',
          textShadowColor: '#161716',
          textShadowRadius: 1,
          backgroundColor: '#222152',
        }}
      >
        {content}
      </Text>
    </View>
  )
  const renderComment = ({ item }) => <SingleComment content={item.content} />

  return (
    <ImageBackground source={image} style={styles.loginImage}>
      <ScrollView
        style={{ flex: 1 }}
        refreshControl={
          <RefreshControl refresh={refreshing} onRefresh={refreshComments} />
        }
      >
        <View
          style={{ flex: 1, marginTop: 20, flexDirection: 'column' }}
          testID='comment-section'
          name='CommentSection'
        >
          <FlatList
            data={comments}
            keyExtractor={item => item.id.toString()}
            renderItem={renderComment}
          />
          <View
            style={{
              flexDirection: 'row',
              height: 70,
              marginTop: 20,
              paddingHorizontal: 10,
            }}
          >
            <TextInput
              testID='comment-input'
              placeholder='Share your thoughts...'
              placeholderTextColor='#331a5c'
              onChangeText={text => setNewComment(text)}
              clearButtonMode='always'
              style={{
                backgroundColor: 'rgba(0,0,0,0.1)',
                borderRadius: 180,
                height: 40,
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
                padding: 8,
                marginRight: 4,
                color: '#682fc4',
                shadowColor: '#f4cfff',
                textDecorationStyle: 'solid',
                textDecorationColor: '#59ffff',
              }}
            />
            <TouchableOpacity
              testID='comment-submit'
              title='Comment'
              style={{
                backgroundColor: '#3811d4',
                width: 50,
                height: 50,
                marginLeft: 4,
                borderRadius: 330,
                borderWidth: 1.4,
                borderColor: '#8b6eff',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => {
                Comments.create(post.id, credentials, newComment)
              }}
            >
              <FontAwesome5 name='comment-dots' size={24} color='#ffffff' />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  )
}

export default CommentSection
