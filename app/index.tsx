import { Image, ScrollView, StatusBar, Text, View } from "react-native";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import CustomButtons from "@/components/CustomButton";

export default function Index() {
  return (
    <SafeAreaView className="h-full bg-primary pt-5">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="pt-19 min-h-[85vh] w-full items-center justify-center px-4">
          <Image source={images.logo} className="h-[260px] max-w-[290px]" resizeMode="contain"/>

          <View className="relative">
            <Text className="pt-28 text-center text-2xl font-bold text-white">
            Discover The Best Flavors Of <Text className="text-secondary-100">RJsIceCream</Text>
            </Text>

            <Image
              source={images.path}
              className="relative -bottom-1 -right-12 h-[30px] w-[160px]"
              resizeMode="contain"
            />

            <Text className="mt-6 text-center font-pregular text-sm text-gray-100">
              Where All Special Ice Creams In Any Occasions Of RJsIceCream
            </Text>

            <CustomButtons
              title="Continue with Email"
              handlePress={() => router.push("/sign-in" as any)}
              containerStyles="w-ful mt-7"
            />
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" barStyle="light-content" />
    </SafeAreaView>
    
  );
}
