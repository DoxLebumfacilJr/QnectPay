import React from 'react';
import { TouchableOpacity, Text, GestureResponderEvent } from 'react-native';

interface CustomButtonsProps {
  title: string;
  handlePress: (event: GestureResponderEvent) => void;
  containerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;
}

const CustomButtons: React.FC<CustomButtonsProps> = ({
  title,
  handlePress,
  containerStyles = '',
  textStyles = '',
  isLoading = false,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`min-h-[62px] items-center justify-center rounded-xl bg-secondary ${containerStyles} ${
        isLoading ? 'opacity-50' : ''
      }`}
      disabled={isLoading}>
      <Text className={`font-psemibold text-lg text-primary ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButtons;
