import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const AppTextInput = ({ ...otherProps }) => {
  const [focused, setFocused] = useState(false);
  return (
    <TextInput
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      placeholderTextColor={Colors.darkText}
      style={[
        {
          fontFamily: "Regularfont",
          fontSize: 14,
          padding: 20,
          backgroundColor: Colors.lightPrimary,
          borderRadius: 10,
          marginVertical: 10,
        },
        focused && {
          borderWidth: 3,
          borderColor: Colors.primary,
          shadowOffset: { width: 4, height: 10 },
          shadowColor: Colors.primary,
          shadowOpacity: 0.2,
          shadowRadius: 10,
        },
      ]}
      {...otherProps}
    />
  );
};

export default AppTextInput;

const styles = StyleSheet.create({});
