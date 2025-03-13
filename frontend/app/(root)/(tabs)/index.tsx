import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={({ item }) =>
          <TouchableOpacity className='flex flex-col items-start w-44 bg-gray-400 h-48 rounded relative mx-4 my-4'>
            <View className='w-full h-full'>
              <Text>Hello</Text>
            </View>
          </TouchableOpacity>}
        numColumns={2}
        ListHeaderComponent={
          <View>
            <Text>Hello</Text>
          </View>
        }
      >
      </FlatList>
    </SafeAreaView>
  )
}

export default Home