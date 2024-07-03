import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, TextInput, ToastAndroid, ScrollView } from "react-native";
import { useUsersStore } from "../../Stores/user.store";
import RNPickerSelect from "react-native-picker-select";
import { useRolesStore } from "../../Stores/rol.store";
import { Picker } from "@react-native-picker/picker";


interface Props {
  onCloseModal: () => void;
  id: number;
  name: string;
  lastName: string;
  email: string;
  rolId: number;
  password: string;
  address: {
    department: string;
    municipality: string;
    complement: string;
  };
}

function UpdateUser(props: Props) {
  const { OnUpdate } = useUsersStore();
  const { OnGetAllRoles, roles } = useRolesStore();
  const [formState, setFormState] = useState({
    name: props.name,
    lastName: props.lastName,
    email: props.email,
    rolId: props.rolId,
    password: props.password,
    newPassword: "",
    address: {
      department: props.address.department,
      municipality: props.address.municipality,
      complement: props.address.complement,
    },
  });

  useEffect(() => {
    OnGetAllRoles();
  }, []);

  const handleCancel = () => {
    props.onCloseModal();
  };
  const handleUpdate = () => {
    const updatedFormState = formState.newPassword
      ? { ...formState, password: formState.newPassword }
      : formState;

    OnUpdate(props.id, updatedFormState);
    ToastAndroid.show('Registro actualizado exitosamente!', ToastAndroid.SHORT);
    props.onCloseModal();
  };


  const handleInputChange = (value: string, field: string) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleAddressChange = (value: string, field: string) => {
    setFormState((prevState) => ({
      ...prevState,
      address: {
        ...prevState.address,
        [field]: value,
      },
    }));
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <>
        <TextInput
          value={formState.name}
          onChangeText={(value) => handleInputChange(value, "name")}
          style={inputStyle}
        />
        <TextInput
          value={formState.lastName}
          onChangeText={(value) => handleInputChange(value, "lastName")}
          style={inputStyle}
        />
        <Picker >
          {roles &&
            roles.map((role) => (
              <Picker.Item key={role.id} label={role.name} value={role.id} />
            ))
          }
        </Picker>
        <TextInput
          value={formState.email}
          onChangeText={(value) => handleInputChange(value, "email")}
          style={inputStyle}
        />
        <TextInput
          value={formState.newPassword}
          onChangeText={(value) => handleInputChange(value, "newPassword")}
          style={inputStyle}
          placeholder="Nueva contraseña"
          secureTextEntry
        />
        <TextInput
          value={formState.address.department}
          onChangeText={(value) => handleAddressChange(value, "department")}
          style={inputStyle}
          placeholder="Department"
        />
        <TextInput
          value={formState.address.municipality}
          onChangeText={(value) => handleAddressChange(value, "municipality")}
          style={inputStyle}
          placeholder="Municipality"
        />
        <TextInput
          value={formState.address.complement}
          onChangeText={(value) => handleAddressChange(value, "complement")}
          style={inputStyle}
          placeholder="Complement"
        />

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 10,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "crimson",
              borderRadius: 5,
              padding: 10,
              marginRight: 58,
            }}
            onPress={handleCancel}
          >
            <Text style={{ color: "white", fontWeight: "bold", marginTop: 2 }}>
              Cancelar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#00ABED",
              borderRadius: 5,
              padding: 10,
              marginLeft: 8,
            }}
            onPress={handleUpdate}
          >
            <Text style={{ color: "white", fontWeight: "bold", marginTop: 2 }}>
              Aceptar
            </Text>
          </TouchableOpacity>
        </View>
      </>
    </ScrollView>
  );
}

const inputStyle = {
  height: 40,
  padding: 12,
  width: 250,
  borderColor: "#00abed",
  borderWidth: 2,
  borderRadius: 5,
  marginTop: 20,
  margin: 20,
};

export default UpdateUser;
