import React from 'react'
import { Tabs } from 'expo-router'
import Colors from '@/constants/Colors'
import { Feather, Entypo } from '@expo/vector-icons';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{headerShown: false, tabBarActiveTintColor: Colors.primary}}>

        <Tabs.Screen name="nature-meditate" 
        options={{
            tabBarLabel: "Meditate",
            tabBarIcon: ({ color }) => (
                <Feather name="menu" size={24} color={color} />
            )
            
            }}/>

        <Tabs.Screen name="affirmations" 
        options={{
            tabBarLabel: "Affirmations",
            tabBarIcon: ({ color }) => (
                <Entypo name="open-book" size={24} color={color} />
            )
            
            }}/>


    </Tabs>
  )
}

export default TabsLayout