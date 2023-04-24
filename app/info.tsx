import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, Stack, useRouter } from 'expo-router'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Info = () => {
    const router=useRouter()
  return (
    <SafeAreaView className='flex-1'>
        <Stack.Screen options={{title: "Final Page", headerTitleAlign: 'center', headerTitleStyle: { fontSize: 16 }  }}/>
   <View className='p-5 flex justify-center items-center gap-10'>
    <Text>Hurray!</Text>
    <Link href={"/"}>
    <TouchableOpacity className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500' >





<Text className='text-sm text-white'>Back Home</Text>

</TouchableOpacity>
</Link>

   </View>
    </SafeAreaView>
  )
}

export default Info