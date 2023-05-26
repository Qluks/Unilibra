import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from '@rneui/themed';
import mao from '../../assets/mao.png';


function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={mao} />
            <Text style={styles.textStyle1}>Bem-vindo!!</Text>
            <Text style={styles.textStyle2}>Libras é a sigla da Língua Brasileira de Sinais, uma língua de modalidade gestual-visual onde é possível se comunicar através de gestos, expressões faciais e corporais.</Text>
            <Button
                onPress={() => navigation.navigate('Catalogo')}
                title="Começar"
                buttonStyle={{
                    backgroundColor: '#76D2C7',
                    borderRadius: 12,
                }}      
                containerStyle={{
                    width: 339,
                    height: 55,
                    marginLeft: 34,
                    marginTop: 50,
                    fontSize: 18,   
                }}
                titleStyle={{ color: 'white', fontSize:18, paddingVertical: 5}}
            />
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#2F2F3A",
      width: "100%",
      height: "100%",
      flexDirection: 'column',
      textAlign: "center,"
    },
    textStyle1: {
        color: "#ffffff",
        marginLeft: 160,
        marginTop: 30,
        fontWeight: "bold",
    },
    textStyle2: {
        color: "#ffffff",
        marginLeft: 5,
        marginTop: 20,
        textAlign: "center"
    },
    image: {
        marginLeft: 100,
        marginTop: 150,
        width: 200,
        height: 200,
    }
});

export default Home;