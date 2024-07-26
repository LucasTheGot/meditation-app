import { View, Text, ImageBackground, Platform } from 'react-native'
import React from 'react'
// import {LinearGradient} from 'expo-linear-gradient';

import lightPurpleImage from '@/assets/images_resonate/light_purple.webp';
import { SafeAreaView } from 'react-native-safe-area-context';
import {StatusBar} from "expo-status-bar"
import CustomButton from '@/components/CustomButton';
import {useRouter} from 'expo-router';
import AppGradient from '@/components/AppGradient';

//<LinearGradient className = "flex-1" colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}></LinearGradient>

export default function App() {
  const router = useRouter();

  return (
    <View className="flex-1">
        <ImageBackground
        source={lightPurpleImage}
        resizeMode="cover"
        className="flex-1"
        >
          <AppGradient 
          colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}
          >
            <SafeAreaView className="flex-1 px-1 justify-between">
              <View>
                <Text className="text-center text-white font-bold text-4xl">
                  App
                </Text>
                <Text className="text-center text-white text-regular text-2xl mt-3">
                  Test message hehahhahaha
                </Text>
              </View>

              <View>
                <CustomButton 
                  onPress={() => router.push("/nature-meditate")} 
                  title="Get Started"
                />
              </View>

              <StatusBar style="light" />
            </SafeAreaView>
          </AppGradient>
        </ImageBackground>
    </View>
  )
}