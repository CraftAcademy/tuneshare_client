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
// import styles from '../styles/styles'

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
      <View style={styles.header}>
        <Image style={styles.avatar} source={image} />
        <Text testID='user-email' style={styles.name}>
          {userEmail}
        </Text>
      </View>

      <View style={styles.body}>
        <View style={styles.bodyContent}>
          {userPosts &&
            userPosts.map((item, index) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('SinglePost', { post: item })
                }
              >
                <ListItem
                  style={styles.row}
                  testID={`user-post-${item.id}`}
                  key={index}
                >
                  <Avatar
                    style={{ height: tileSize, width: tileSize }}
                    source={{ uri: item.image }}
                  />
                  <ListItem.Content>
                    <ListItem.Title>{item.track}</ListItem.Title>
                    <ListItem.Subtitle>{item.artists}</ListItem.Subtitle>
                  </ListItem.Content>
                  <Ionicons
                    name='trash'
                    size={26}
                    color='#22272c'
                    testID={`delete-button-${item.id}`}
                    onPress={() => {
                      PostService.delete(item.id)
                    }}
                  />
                </ListItem>
              </TouchableOpacity>
            ))}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#2a4158',
    height: 190,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 30,
  },
  body: {
    //marginTop: ,
    height: 700,
    backgroundColor: '#597387',
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 22,
    color: 'white',
    fontWeight: '600',
    fontFamily: 'AppleSDGothicNeo-Thin',
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginTop: 10,
  },
})

export default UserProfile
