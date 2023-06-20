import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";

const Status = () => {
  return (
    <View style={{ marginTop: 30 }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#ffffff"
        translucent={true}
      />
      <Text>Màn hình đơn hàng</Text>
    </View>
  );
};

export default Status;
