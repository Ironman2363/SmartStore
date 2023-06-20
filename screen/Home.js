import { StatusBar } from "expo-status-bar";
import React, { useCallback, useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import Mate from "react-native-vector-icons/MaterialCommunityIcons";
const CATEGORIES = [
  "Điện thoại",
  "Máy tính",
  "Màn hình",
  "Tai nghe",
  "Bàn phím",
  "Chuột",
];
const Home = ({ navigation }) => {
  const [categoryIndex, setCategoryIndex] = useState(0);
  return (
    <ScrollView>
      <SafeAreaView>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 20,
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
              }}
              style={{
                width: 50,
                aspectRatio: 1,
                borderRadius: 50,
                borderWidth: 2,
                borderColor: "#1f41bb",
              }}
              resizeMode="cover"
            />
          </TouchableOpacity>

          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "600",
                  marginBottom: 4,
                  color: "#1f41bb",
                }}
              >
                Hi, Ironman 👋
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              width: 50,
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon
              name="notifications"
              size={22}
              color="black"
              style={{ opacity: 0.5 }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 24,
            gap: 12,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Icon
              name="search"
              size={22}
              color="black"
              style={{ opacity: 0.5 }}
            />
            <Text
              placeholder="Tìm kiếm"
              placeholderTextColor="black"
              style={{
                width: "75%",
                color: "black",
                opacity: 0.5,
                marginStart: 10,
              }}
            >
              Tìm kiếm
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 50,
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Mate
              name="tune-variant"
              size={22}
              color="black"
              style={{ opacity: 0.5 }}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          data={CATEGORIES}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 16,
            gap: 12,
            marginTop: 16,
          }}
          renderItem={({ item, index }) => {
            const isSelected = categoryIndex === index;
            return (
              <TouchableOpacity
                onPress={() => setCategoryIndex(index)}
                style={{
                  backgroundColor: isSelected ? "black" : "white",
                  paddingHorizontal: 20,
                  paddingVertical: 12,
                  borderRadius: 100,
                  borderWidth: isSelected ? 0 : 1,
                  borderColor: "white",
                }}
              >
                <Text
                  style={{
                    color: isSelected ? "white" : "black",
                    fontWeight: "600",
                    fontSize: 14,
                    opacity: isSelected ? 1 : 0.5,
                  }}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Home;
