import { Text, View, Image, Button } from "react-native";
import React from "react";

const Profile = () => {
  return (
    <View className="flex-1 items-center justify-center bg-gray-100 p-5">
      <Image
        className="w-36 h-36 rounded-full mb-5"
        source={{ uri: "https://via.placeholder.com/150" }} // Replace with actual image URL
      />
      <Text className="text-2xl font-bold mb-2">John Doe</Text>
      <Text className="text-gray-500 text-base mb-5">johndoe@example.com</Text>
      <Button title="Edit Profile" onPress={() => alert("Edit Profile")} />
    </View>
  );
};

export default Profile;
