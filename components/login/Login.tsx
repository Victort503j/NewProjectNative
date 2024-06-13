import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useAuthStore } from '../../Stores/Auth.store';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { OnMakeLogin } = useAuthStore();

    const handleLogin = async () => {
        try {
            await OnMakeLogin({ email, password });
        } catch (error) {
            Alert.alert('Error', 'Error al iniciar sesión. Por favor, verifica tus credenciales.');
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <ImageBackground style={styles.background} source={require('../Images/background.png')}>
                <View style={styles.lightContainer}>
                    <Image style={[styles.light1, { marginTop: 24 }]} source={require('../Images/light.png')} />
                    <Image style={[styles.light2, { marginTop: 9 }]} source={require('../Images/light.png')} />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Iniciar Sesión</Text>
                </View>
                <View style={styles.formContainer}>
                    <View style={styles.form}>
                        <View style={styles.inputContainer}>
                            <View style={styles.inputIcon}>
                                <Image style={styles.inputIconImage} source={require('../Images/background.png')} />
                            </View>
                            <TextInput
                                style={styles.input}
                                placeholder='Gmail'
                                placeholderTextColor='rgb(167, 163, 163)'
                                value={email}
                                onChangeText={setEmail}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <View style={styles.inputIcon}>
                                <Image style={styles.inputIconImage} source={require('../Images/background.png')} />

                            </View>
                            <TextInput
                                style={styles.input}
                                placeholder='Contraseña'
                                placeholderTextColor='rgb(167, 163, 163)'
                                secureTextEntry={true}
                                value={password}
                                onChangeText={setPassword}
                            />
                        </View>
                        <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
                            <Text style={styles.buttonText}>Iniciar Sesión</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    titleContainer: {
        alignItems: 'center',
        marginTop: 25,
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
    },
    formContainer: {
        marginHorizontal: 40,
        marginTop: 150,
    },
    form: {},
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#F3F3F3',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    inputIcon: {
        paddingHorizontal: 10,
    },
    inputIconImage: {
        width: 20,
        height: 20,
    },
    input: {
        flex: 1,
        height: 40,
        paddingLeft: 10,
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '700',
        fontSize: 16,
    },
    lightContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        marginTop: -226,
    },
    light1: {
        width: 100,
        height: 245,
    },
    light2: {
        width: 100,
        height: 245,
    },
});

export default Login;
