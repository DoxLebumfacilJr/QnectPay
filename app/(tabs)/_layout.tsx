import { Redirect, Tabs } from "expo-router";
import React, { useEffect, useRef } from "react";
import { Animated, Image, Text, View, Dimensions } from "react-native";
import { icons } from "../../constants";

// For the Width
const width = Dimensions.get("screen").width;

interface TabIconProps {
  icon: any; // or more specific type if you know the icon type
  color: string;
  name: string;
  focused: boolean;
}

const TabIcon = ({ icon, color, name, focused }: TabIconProps) => {
  // Animation value for sliding effect
  const translateYAnim = useRef(new Animated.Value(10)).current; // Start off-screen

  useEffect(() => {
    // Start animation when focused
    if (focused) {
      Animated.timing(translateYAnim, {
        toValue: focused ? 0 : 10, // Slide to 0 when focused, reset to 10 when not focused
        duration: 300, // Animation duration in milliseconds
        useNativeDriver: true, // Use native driver for better performance
      }).start();
    } else {
      // Reset position when not focused
      translateYAnim.setValue(10);
    }
  }, [focused]);

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Image
        source={icon}
        resizeMode="contain"
        style={{ tintColor: color, width: 20, height: 20 }}
      />
      {focused && (
        <Animated.View
          style={{
            transform: [{ translateY: translateYAnim }], // Animate translateY instead of bottom
            position: "relative",
            bottom: -5, // Starting position from the bottom
            width: 40,
            height: 2,
            borderRadius: 1,
            backgroundColor: "#E55133",
          }}
        />
      )}
      <Text
        style={{
          color,
          fontSize: 15,
          marginTop: 4,
          textAlign: "center", // Center-align the text
          width: "100%", // Ensure the text stays within the container
        }}
        numberOfLines={1} // Prevent text wrapping
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "rgba(37,40,48,0.8)",
            borderRadius: 40,
            marginHorizontal: 15,
            marginBottom: 36,
            height: 60,
            position: "absolute",
            overflow: "hidden",
            borderWidth: 1,
            borderBlockColor: "0f0d23",
          },
          tabBarItemStyle: {
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            paddingTop: 18,
          },
        }}
      >
        <Tabs.Screen
          name="Home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Inbox"
          options={{
            title: "Inbox",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.inbox}
                color={color}
                name="Inbox"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Scanner"
          options={{
            title: "Scanner",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.scanner}
                color={color}
                name="Scanner"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
