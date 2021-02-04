import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Text, View } from 'react-native'
import User from '../modules/UserService'

const UserProfile = () => {
  const { userProfile, userId, credentials } = useSelector(state => state)

  useEffect(() => {
    User.show(userId, credentials)
  }, [])
  
  let postList = (
    userProfile.posts.map((post) => {
      return (
        <Image source={post.image} /> 
      )
      }))
  
  return (
    <View>
      <Text testID='user-email'>{userProfile.email}</Text>
      <View style={{flex: 1, flexDirection: 'row'}}>
        {/* {userProfile && postList} */}
      </View>
    </View>
  )
}

export default UserProfile