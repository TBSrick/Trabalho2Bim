import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Home from './home';
import Mapa from './papa.png';

export default function App() {
    const [page, setPage] = React.useState('sobre');

    const renderPage = () => {
        if (page === 'sobre') {
            return (
                <View style={styles.container}>
                    <Text style={styles.logo}>LocalizaDEX</Text>
                    <Image source={Mapa} style={styles.imagem}/>
                    <Text style={styles.title}>Localização atual</Text>
                    <Text style={styles.subtexto}>Longitude: 0.00</Text>
                    <Text style={styles.subtexto}>Altitude: 0.00</Text>
                    
                    <TouchableOpacity style={styles.button} onPress={() => setPage('home')}>

                        <Text style={styles.buttonText}>Obter localização</Text> 
                    </TouchableOpacity>
                </View>
            );
        } else if (page === 'home') {
            return <Home />;
        }
    };

    return <View style={styles.container}>{renderPage()}</View>;
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    imagem: {
        marginTop: 23 ,
      },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 20,
        margin: 40,
    },
    subtexto: {
        fontSize: 22,
        color: '#000',
        marginBottom: 20,
        margin: 10,
    },
    logo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#7EC7E7',
        marginBottom: 50,
        right: 140,
    },
    button: {
        backgroundColor: '#E788FF',
        padding: 10,
        borderRadius: 15,
        marginTop: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    }
  });
