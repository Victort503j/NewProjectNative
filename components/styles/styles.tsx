import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    textContainer: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        color: 'black'
    },
    buscar: {
        padding: 10,
        height: 40,
        width: 250,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 20,
        margin: 10,
        marginRight: 70,
        display: 'flex'
    },
    card: {
        marginVertical: 10,
        padding: 20,
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    button: {
        display: 'flex',
        backgroundColor: 'midnightblue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonDelete: {
        display: 'flex',
        backgroundColor: 'crimson',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    Container1: {
        width: '100%',
        height: 15,
        marginTop: -45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Menu: {
        padding: 10,
        width: '95%',
        marginTop: -730,
    },
    addButton: {
        backgroundColor: 'green',
        marginTop: 20,
        width: 100,
        height: 40,
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 270
    },
    addButtonText: {
        color: 'white',
        fontSize: 13,
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
    modalTitle: {
        fontWeight: 'bold',
        marginLeft: 20,
        fontSize: 18,
    },
});



export default styles