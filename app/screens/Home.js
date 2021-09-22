import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import InputProvince from "../components/inputProvince";
import Item from "../components/item";

const Home = ({ route }) => {
  // const valores = route.params;
  // console.log(valores);
  return (
    <View style={styles.container}>
      {/* LOGO */}
      <View
        style={{
          flex: 1,
          backgroundColor: "#ffffff",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <Text>Logo</Text> */}
        <Image
          style={{ width: 150, height: 150 }}
          source={require("../../assets/logo.png")}
        />
      </View>

      {/* LOGO */}

      {/* QUE NECESITAS */}
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>
          ¿Qué Necesitas?
        </Text>
        {/* Primera lista */}
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Item icon="paint-brush" />
          <Item icon="bath" />
          <Item icon="shower" />
          <Item icon="key" />
        </View>
        {/* Primera lista */}
        {/* Segunda lista */}
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Item icon="building" />
          <Item icon="briefcase" />
          <Item icon="camera-retro" />
          <Item icon="cutlery" />
        </View>
        {/* Segunda lista */}
      </View>

      {/* QUE NECESITAS */}

      {/* DONDE Y BOTON BUSCAR */}
      <View style={{ flex: 1, backgroundColor: "#ccc3dd" }}>
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            ¿Dónde?
          </Text>
          <InputProvince />
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            padding: 20,
            justifyContent: "center",
          }}
        >
          <TouchableOpacity style={styles.button}>
            <Text>Buscar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "#ffffff",
    // marginTop: StatusBar.currentHeight,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#48B9BE",
    padding: 10,
    borderRadius: 5,
  },
});

export default Home;
