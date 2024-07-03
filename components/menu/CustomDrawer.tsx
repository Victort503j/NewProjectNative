import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../../home/Home';
import CustomMenu from './DrawerNavegation';
import ListUser from '../user/ListUser';
import ListRol from '../rol/ListRol';
import Login from '../login/Login';
import { useAuthStore } from '../../Stores/Auth.store';
import ListImage from '../image/ListImage';

const Drawer = createDrawerNavigator();

const DrawerNavegation = () => {
    const { isAuthenticated, isAdmin, OnGetInfo } = useAuthStore();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            await OnGetInfo();
            setIsLoading(false);
        };

        checkAuth();
    }, []);

    if (isLoading) {
        return null;
    }

    return (
        <NavigationContainer>
            {isAuthenticated && isAdmin ? (
                <Drawer.Navigator
                    drawerContent={props => <CustomMenu {...props} />}
                    screenOptions={{
                        headerShown: true,
                        headerStyle: {
                            backgroundColor: '#00ABED',
                        },
                        headerTitleStyle: {
                            color: '#fff',
                        },
                        headerTintColor: '#fff',
                        lazy: true,
                    }}
                    backBehavior='history'
                    detachInactiveScreens
                >
                    <Drawer.Screen name="Home" component={Home} />
                    <Drawer.Screen name="Usuarios" component={ListUser} />
                    <Drawer.Screen name="Login" component={Login} />
                    <Drawer.Screen name="Roles" component={ListRol} />
                    <Drawer.Screen name="Images" component={ListImage} />
                </Drawer.Navigator>
            ) : (
                <Login />
            )}
        </NavigationContainer>
    );
};

export default DrawerNavegation;
