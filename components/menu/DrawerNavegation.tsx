import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome5 } from '@expo/vector-icons';

import {
    Pressable,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from "react-native";
import { useAuthStore } from '../../Stores/Auth.store'


const CustomMenu = ({ navigation }: DrawerContentComponentProps) => {
    const authStore = useAuthStore();
    const handleLogout = async () => {
        try {
            await authStore.OnLogout();
            navigation.navigate('Login');
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };
    return (
        <>
            <StatusBar style="light" />
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>CRUD-REACT-NATIVE</Text>
                    <TouchableOpacity onPress={() => navigation.closeDrawer()}>
                        <FontAwesome5 name="times" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <Pressable
                        style={styles.button}
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Text style={styles.buttonText}>Ir a inicio</Text>
                        <FontAwesome5 name="home" size={23} color="black" style={styles.icon} />
                    </Pressable>
                </View>
                <View style={styles.buttonContainer}>
                    <Pressable
                        style={styles.button}
                        onPress={() => navigation.navigate('Roles')}
                    >
                        <Text style={styles.buttonText}>Ir a roles</Text>
                        <FontAwesome5 name="user-tag" size={23} color="black" style={styles.icon} />
                    </Pressable>
                </View>
                <View style={styles.buttonContainer}>
                    <Pressable
                        style={styles.button}
                        onPress={() => navigation.navigate('Usuarios')}
                    >
                        <Text style={styles.buttonText}>Ir a usuarios</Text>
                        <FontAwesome5 name="users" size={23} color="black" style={styles.icon} />
                    </Pressable>
                </View>
                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                    <Text style={styles.logoutText}>Cerrar sesión</Text>
                    <FontAwesome5 name="sign-out-alt" size={20} color="black" style={styles.logoutIcon} />
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#00ABED',
        paddingTop: 66,
        padding: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    buttonContainer: {
        marginTop: 15,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        marginRight: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    icon: {
        marginLeft: 'auto',
    },
    logoutButton: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
    },
    logoutText: {
        marginRight: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    logoutIcon: {
        marginLeft: 'auto',
    },
});

export default CustomMenu;
