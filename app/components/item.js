import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Item = (params) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Icon
        name={params.icon}
        type="font-awesome"
        color="#ccc"
        onPress={() => console.log("hello")}
        size={40}
      />
      <Text>Servicio</Text>
    </View>
  );
};

export default Item;
