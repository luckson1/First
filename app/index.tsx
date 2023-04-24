import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const Home = () => {
    const router=useRouter()
  return (

       <SafeAreaView className="bg-white flex-1 ">
        <StatusBar />
       <Stack.Screen options={{title: "Overview", headerTitleAlign: 'center' , headerTitleStyle: { fontSize: 16 } }}/>
      <View className='flex-1 px-5 flex justify-center items-center'>
        <TouchableOpacity className='bg-slate-200 h-40 w-40 rounded-lg flex justify-center items-center' onPress={()=>router.push("/details")}>
           <Text> Details</Text>
        </TouchableOpacity>
 
      </View>
      
    </SafeAreaView>

  )
}

export default Home