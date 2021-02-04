import React, {  useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Text, View, FlatList, Dimensions} from 'react-native'
import { ListItem } from 'react-native-elements'
import User from '../modules/UserService'
import UserPostIndex from './UserPostIndex'

const UserProfile = () => {
  const { userProfile, userId, credentials } = useSelector(state => state)

  useEffect(() => {
    User.show(userId, credentials)
  }, [])

  const screenWidth = Dimensions.get("window").width
  const numColumns = 3
  const tileSize = screenWidth / numColumns

  return (
    <View>
      <Text testID='user-email'>{userProfile.email}</Text>
      <FlatList
        data={userProfile.posts}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ flex: 1, flexDirection: 'column', height: tileSize, width: tileSize, margin: 1 }}>
            <UserPostIndex  post={item} />
          </View>
        )}
        numColumns={3}
      />
    </View>
  )
}

export default UserProfile
