import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

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
          <View
            style={{
              flex: 1,
              backgroundColor: "#fff",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon
              name="heartbeat"
              type="font-awesome"
              color="#ccc"
              onPress={() => console.log("hello")}
              size={50}
            />
            <Text>Servicio</Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: "#fff",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon
              name="heartbeat"
              type="font-awesome"
              color="#ccc"
              onPress={() => console.log("hello")}
              size={50}
            />
            <Text>Servicio</Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: "#fff",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon
              name="heartbeat"
              type="font-awesome"
              color="#ccc"
              onPress={() => console.log("hello")}
              size={50}
            />
            <Text>Servicio</Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: "#fff",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon
              name="heartbeat"
              type="font-awesome"
              color="#ccc"
              onPress={() => console.log("hello")}
              size={50}
            />
            <Text>Servicio</Text>
          </View>
        </View>
        {/* Primera lista */}
        {/* Segunda lista */}
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View
            style={{
              flex: 1,
              backgroundColor: "#fff",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon
              name="heartbeat"
              type="font-awesome"
              color="#ccc"
              onPress={() => console.log("hello")}
              size={50}
            />
            <Text>Servicio</Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: "#fff",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon
              name="heartbeat"
              type="font-awesome"
              color="#ccc"
              onPress={() => console.log("hello")}
              size={50}
            />
            <Text>Servicio</Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: "#fff",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon
              name="heartbeat"
              type="font-awesome"
              color="#ccc"
              onPress={() => console.log("hello")}
              size={50}
            />
            <Text>Servicio</Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: "#fff",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon
              name="heartbeat"
              type="font-awesome"
              color="#ccc"
              onPress={() => console.log("hello")}
              size={50}
            />
            <Text>Servicio</Text>
          </View>
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
      {/* DONDE Y BOTON BUSCAR */}

      {/* <View style={{flex:1, backgroundColor:"#ddd3c3"}}><Text>Buscar</Text></View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
