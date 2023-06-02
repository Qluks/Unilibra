import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

function Catalogo({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          style={styles.categoryItem}
          onPress={() => navigation.navigate("Lista", { classe: "alfabeto" })}
        >
          <Image
            source={require("../../assets/alfabeto.png")}
            style={styles.categoryImage}
          />
          <Text style={styles.categoryText}>Alfabeto</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoryItem}
          onPress={() => navigation.navigate("Lista", { classe: "documento" })}
        >
          <Image
            source={require("../../assets/document.png")}
            style={styles.categoryImage}
          />
          <Text style={styles.categoryText}>Documentos</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    textAlign: "center",
  },
  categoryItem: {
    alignItems: "center",
    marginBottom: 20,
  },
  categoryImage: {
    width: 350,
    height: 200,
    borderRadius: 10,
  },
  categoryText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
export default Catalogo;
