import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Text, View } from 'react-native'
import User from '../modules/UserService'
import { Avatar, ListItem } from 'react-native-elements'

const UserProfile = () => {
  const { userEmail, userPosts, userId, credentials } = useSelector(state => state)

  useEffect(() => {
    User.show(userId, credentials)
  }, [])

  // let postList = userPosts.map((post) => {
  //   return (
  //     <Image key={post.id} source={{ uri: post.image }} />
  //   )
  // })

  return (
    <View>
      <Text testID='user-email'>{userEmail}</Text>
      {/* <View style={{ flex: 1, flexDirection: 'row' }}> */}
      {userPosts.map((item, index) => (
        <ListItem key={index}>
          <Avatar source={{ uri: item.image }} />
          <ListItem.Content>
            <ListItem.Title>{item.track}</ListItem.Title>
            <ListItem.Subtitle>{item.artists}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  )
}

export default UserProfile