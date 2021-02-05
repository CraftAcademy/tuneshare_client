import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native'
import User from '../modules/UserService'
import { Avatar, ListItem } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import PostService from '../modules/PostService'
import { Ionicons } from '@expo/vector-icons'

const UserProfile = () => {
  const navigation = useNavigation()
  const { userEmail, userPosts, userId, credentials } = useSelector(
    state => state
  )

  useEffect(() => {
    User.show(userId, credentials)
  }, [])

  const screenWidth = Dimensions.get('window').width
  const numColumns = 3
  const tileSize = screenWidth / numColumns

  const image = require('../images/image1.jpg')

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image style={styles.avatar} source={image} />
        <Text testID='user-email' style={styles.name}>
          {userEmail}
        </Text>
      </View>

      {userPosts &&
        userPosts.map((item, index) => (
          <View style={styles.description}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SinglePost', { post: item })}
            >
              <ListItem
                style={styles.description}
                testID={`user-post-${item.id}`}
                key={index}
              >
                <Avatar
                  style={{ height: tileSize, width: tileSize }}
                  source={{ uri: item.image }}
                />
                <ListItem.Content>
                  <ListItem.Title
                    style={{ fontFamily: 'Copperplate', color: '#1c052b' }}
                  >
                    {item.track}{' '}
                  </ListItem.Title>
                  <ListItem.Subtitle
                    style={{ fontFamily: 'GurmukhiMN', color: '#4f1973' }}
                  >
                    {item.artists}
                  </ListItem.Subtitle>
                </ListItem.Content>
                <Ionicons
                  name='trash'
                  size={26}
                  color='#cc1433'
                  testID={`delete-button-${item.id}`}
                  onPress={() => {
                    PostService.delete(item.id)
                  }}
                />
              </ListItem>
            </TouchableOpacity>
          </View>
        ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8ebcf5',
  },
  profileHeader: {
    backgroundColor: '#2a4158',
    height: Dimensions.get('window').height * 0.2,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 360,
    borderWidth: 4,
    borderColor: '#480c70',
    marginTop: 32,
    alignSelf: 'center',
    position: 'absolute',
    paddingTop: 60,
  },
  body: {
    height: Dimensions.get('window').height * 0.8,
    backgroundColor: '#597387',
    alignItems: 'center',
    padding: 10,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'AppleSDGothicNeo-Thin',
    textShadowColor: '#4a3c91',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 6,
    paddingTop: 140,
    paddingBottom: 12,
  },
  description: {
    fontSize: 18,
    margin: 6,
    color: 'rbga(10,54,110,0.2)',
    borderRadius: 4,
    borderColor: '#6a6fad',
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 3,
    borderTopWidth: 0.5,
  },
})

export default UserProfile
