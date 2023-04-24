import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Stack, useRouter } from 'expo-router'

const ProductOne = () => {
    const router=useRouter()
  return (
    <View className='flex-1 flex justify-center items-center gap-5'>
          <Stack.Screen options={{title: "1st Product", headerTitleAlign: 'center', headerTitleStyle: { fontSize: 16 }  }}/>
      <Text className='text-2xl'>1st Product</Text>
      <TouchableOpacity className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500' onPress={()=>router.back()}>

<Text className='text-sm text-white'>Back</Text>
</TouchableOpacity>
    </View>
  )
}

export default ProductOne