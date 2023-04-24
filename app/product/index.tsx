import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Index = () => {
    const router= useRouter()
  return (
    <View className='flex-1 justify-center items-center'>
      <Stack.Screen options={{title: "Product", headerTitleAlign: 'center',   headerTitleStyle: { fontSize: 16 }}}/>
     <View className='flex-1 flex justify-center items-center gap-10'>
        <TouchableOpacity className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500' onPress={()=>router.push("/product/productOne")}>

            <Text className='text-sm text-white'>Product 1</Text>
        </TouchableOpacity>
        <TouchableOpacity className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-purple-500' onPress={()=>router.push("/product/productTwo")}>
            
            <Text className='text-sm text-white'>Product2</Text>
        </TouchableOpacity>

     </View>
    </View>
  )
}

export default Index