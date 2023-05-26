import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Catalogo() {
    return (
      <View style={styles.container}>
        <Text>This is profile</Text>
      </View>
    );
 };

 const styles = StyleSheet.create({
    container: {
      backgroundColor: "#2F2F3A",
      width: "100%",
      height: "100%",
      flexDirection: 'column',
      textAlign: "center,"
    }
});
export default Catalogo;