import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';


import Sobre from './sobre';
import IMG from './miranha.png'; 

export default function App() {
    const [page, setPage] = React.useState('home');

    const renderPage = () => {
        if (page === 'home') {
            return (
                <View style={styles.container}>
                    <Text style={styles.logo}>LocalizaDEX</Text>
                    <Image source={IMG}/>
                    <Text style={styles.title}>Nosso aplicativo oferece localização precisa em tempo real, facilitando encontrar amigos, locais de interesse e planejar rotas eficientes.</Text>
                    
                    <TouchableOpacity style={styles.button} onPress={() => setPage('sobre')}>
                 
                        <Text style={styles.buttonText}>Localização</Text> 

                    </TouchableOpacity>
                </View>
            );
        } else if (page === 'sobre') {
            return <Sobre />;
        }
    };

    return <View style={styles.container}>{renderPage()}</View>;
}

const styles = StyleSheet.create({
    imagem: {
       
      },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    title: {
        fontSize: 16,
        marginBottom: 20,
        padding: 40,
        justifyContent: 'center',
        textAlign:'justify',
    },
    logo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 50,
        right: 140,
    },
    button: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'blue',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
  });
