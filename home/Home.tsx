import React from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView } from 'react-native';

function Home() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.title}>
                    CRUD REACT-NATIVE
                </Text>
                <Image
                    source={require('../components/Images/Home.png')}
                    style={styles.image}
                />
            </View>
            <Text style={styles.infoText}>
                ¡Bienvenido a mi aplicación CRUD React-Native!
                {'\n\n'}
                Aquí podrás realizar todas las operaciones básicas:
                {'\n\n'}
                📝 Crear datos
                {'\n\n'}
                📖 Leer datos
                {'\n\n'}
                ✏️ Actualizar datos
                {'\n\n'}
                ❌ Eliminar datos
            </Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        backgroundColor: '#00ABED',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        paddingVertical: 20,
    },
    title: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
    },
    image: {
        width: 250,
        height: 170,
        marginBottom: 20,
    },
    infoText: {
        paddingHorizontal: 7,
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
        lineHeight: 24,
        fontStyle: 'italic',
    }
});

export default Home;
