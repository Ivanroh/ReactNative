import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";

const InputProvince = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <Input
        placeholder="En toda España"
        leftIcon={<Icon name="map-marker" size={24} color="#E42841" />}
        rightIcon={<Icon name="chevron-down" size={14} color="#ccc" />}
        style={{ textAlign: "center" }}
      />
    </View>
  );
};

export default InputProvince;
