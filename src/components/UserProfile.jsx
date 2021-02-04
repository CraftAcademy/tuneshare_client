import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Text, View, Dimensions, TouchableOpacity } from 'react-native'
import User from '../modules/UserService'
import { Avatar, ListItem } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

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

  return (
    <View>
      <Text testID='user-email'>{userEmail}</Text>
      {userPosts.map((item, index) => (
        <TouchableOpacity
          onPress={() => navigation.navigate('SinglePost', { post: item })}
        >
          <ListItem testID={`user-post-${item.id}`} key={index}>
            <Avatar
              style={{ height: tileSize, width: tileSize }}
              source={{ uri: item.image }}
            />
            <ListItem.Content>
              <ListItem.Title>{item.track}</ListItem.Title>
              <ListItem.Subtitle>{item.artists}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default UserProfile
