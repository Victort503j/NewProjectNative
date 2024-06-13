import { Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { useRolesStore } from '../../Stores/rol.store';
import { useEffect, useState } from 'react';

interface Props {
    onCloseModal: () => void;
    id: number;
    name: string;
}

const UpdateRol = (props: Props) => {
    const { OnUpdate } = useRolesStore();
    const [name, setName] = useState("");

    useEffect(() => {
        setName(props.name);
    }, [props.name]);

    const handleCancel = () => {
        props.onCloseModal();
    }

    const handleUpdate = () => {
        OnUpdate(props.id, { name });
        ToastAndroid.show('Registro actualizado exitosamente!', ToastAndroid.SHORT);
        props.onCloseModal();
    };

    return (
        <>
            <TextInput
                value={name}
                onChangeText={setName}
                style={{ height: 40, padding: 12, width: 250, borderColor: '#00abed', borderWidth: 2, borderRadius: 5, marginTop: 20, margin: 20 }}
            />
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                <TouchableOpacity
                    style={{ backgroundColor: 'crimson', borderRadius: 5, padding: 10, marginRight: 58 }}
                    onPress={handleCancel}
                >
                    <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 2 }}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ backgroundColor: '#00ABED', borderRadius: 5, padding: 10, marginLeft: 8 }}
                    onPress={handleUpdate}
                >
                    <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 2 }}>Aceptar</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default UpdateRol;
