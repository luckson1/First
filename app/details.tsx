import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router'

const Details = () => {
    const router=useRouter()
  return (
    <SafeAreaView className='flex-1'>
   <Stack.Screen options={{title: "Details", headerTitleAlign: 'center', headerTitleStyle: { fontSize: 16 }  }}/>
     <View className='flex-1 flex justify-center items-center gap-10'>
        <TouchableOpacity className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500' onPress={()=>router.back()}>

            <Text className='text-sm text-white'>Back Home</Text>
        </TouchableOpacity>
        <TouchableOpacity className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-purple-500' onPress={()=>router.push("/info")}>
            
            <Text className='text-sm text-white'>More Info</Text>
        </TouchableOpacity>

     </View>
    </SafeAreaView >
  )
}

export default Details