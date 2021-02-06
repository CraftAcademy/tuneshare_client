import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { Card } from 'react-native-elements'
import styles from '../styles/styles'
import TrackPlayer from './TrackPlayer'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { Octicons } from '@expo/vector-icons'
import PostService from '../modules/PostService'
import LikeService from '../modules/LikeService'

const PostIndex = ({ post }) => {
  const navigation = useNavigation()
  const { credentials } = useSelector(state => state)
  const [likeColor, setLikeColor] = useState('#36a9e3')

  return (
    <View style={styles.card_container} testID='post-index'>
      <Card
        containerStyle={{
          backgroundColor: 'rgba(255,251,245,0.7)',
          alignSelf: 'center',
          borderRadius: 4,
          borderBottomWidth: 2,
          borderRightWidth: 0.8,
          borderRightWidth: 0.8,
          borderTopWidth: 0.1,
          borderColor: '#361e75',
        }}
        width={Dimensions.get('window').width * 0.9}
        testID={`post-card-${post.id}`}
      >
        <Card.Title testID={`post-title-${post.id}`} style={styles.track}>
          {post.track}
        </Card.Title>
        <Card.Title testID={`post-artist-${post.id}`} style={styles.artists}>
          {post.artists}
        </Card.Title>
        <Card.Divider style={styles.cardDivider} />
        <Card.Image style={styles.image} source={{ uri: post.image }}>
          <TrackPlayer post={post} />
        </Card.Image>
        <Card.Divider style={styles.cardDivider} />
        <Text testID={`post-description-${post.id}`} style={styles.description}>
          {post.description}
        </Text>
        <Card.Divider style={styles.cardDivider} />
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={styles.commentButton}
            testID='comment-button'
            onPress={() =>
              navigation.navigate('CommentSection', { post: post })
            }
          >
            <Text
              style={{
                color: '#4104ba',
                fontFamily: 'Kohinoor Bangla',
                textShadowColor: '#b38bc9',
                textShadowRadius: 0.1,
                textShadowOffset: { width: -0.2, height: 0.02 },
                fontWeight: 'bold',
                fontSize: '16',
              }}
            >
              Leave A Comment...
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'right',
              marginLeft: 120,
            }}
          >
            <Octicons
              name='flame'
              size={24}
              color={likeColor}
              testID={`likeButton-${post.id}`}
              onPress={() => {
                LikeService.create(post.id, credentials)
                PostService.index()
                setLikeColor('#ff5f42')
              }}
            ></Octicons>
            <Text
              style={{ color: likeColor, fontWeight: 'bold', padding: 1 }}
              testID={`likeCount-${post.id}`}
            >
              {post.likes}
            </Text>
          </View>
        </View>
      </Card>
    </View>
  )
}

export default PostIndex
