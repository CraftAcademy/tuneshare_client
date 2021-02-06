import React from 'react'
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import styles from '../styles/styles'
import { Card } from 'react-native-elements'
import TrackPlayer from './TrackPlayer'
import { Ionicons } from '@expo/vector-icons'

const SinglePost = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const post = route.params.post

  const image = require('../images/SinglePost.png')
  return (
    <ImageBackground source={image} style={styles.loginImage}>
      <View style={styles.card_container} testID='post-index'>
        <Card
          containerStyle={{
            backgroundColor: 'rgba(255,251,245,0.7)',
            alignSelf: 'center',
          }}
          style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
          testID={`post-card-${post.id}`}
        >
          <Card.Title testID={`post-title-${post.id}`} style={styles.track}>
            {post.track}
          </Card.Title>
          <Card.Title testID={`post-artist-${post.id}`} style={styles.artists}>
            {post.artists}
          </Card.Title>
          <Card.Divider />
          <Card.Image style={styles.image} source={{ uri: post.image }}>
            <TrackPlayer post={post} />
          </Card.Image>
          <Card.Divider />
          <Text
            testID={`post-description-${post.id}`}
            style={styles.description}
          >
            {post.description}
          </Text>
          <Card.Divider />
        </Card>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            paddingHorizontal: 12,
            height: 60,
            margin: 2,
          }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name='play-back' size={40} color='#86db95' />
          <Text
            style={{
              color: '#86db95',
              fontFamily: 'HelveticaNeue-Italic',
              fontSize: 14,
              fontWeight: 'bold',
              alignItems: 'center',
              paddingTop: 12,
            }}
          >
            Rewind Back To Profile
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

export default SinglePost
