import { View, Text, ScrollView, Image, GestureResponderEvent } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../../constants';

import FormField  from '../../components/FormField';
import CustomButton  from '../../components/CustomButton';
import { Link } from 'expo-router';

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email:'',
    password:'',
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  function submit(event: GestureResponderEvent): void {
    throw new Error('Function not implemented.');
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center items-center min-h-[95vh] px-4 my-3">
          <Image source={images.logo}
          resizeMode='contain' className="w-[115px] h-[90px] " />

          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold ">Sign Up To RJsIceCream</Text>

          <FormField 
            title="Username"
            value={form.username}
            handleChangeText={(e) =>  setForm({ ...form, username: e })}
            otherStyles="mt-7"
          />

          <FormField 
            title="Email"
            value={form.email}
            handleChangeText={(e) =>  setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField 
            title="Password"
            value={form.password}
            handleChangeText={(e) =>  setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7 w-full"
            isLoading={isSubmitting}
          />

          <View className="flex-row pt-5 gap-2 justify-center">
            <Text className="text-lg text-gray-100 font-pregular">
              Have an Account Already?
            </Text>
            <Link href="./sign-in" className="text-lg font-psemibold text-secondary" >Sign In</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp