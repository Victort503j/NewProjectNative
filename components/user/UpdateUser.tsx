import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, TextInput, ToastAndroid } from "react-native";
import { useUsersStore } from "../../Stores/user.store";
import RNPickerSelect from "react-native-picker-select";
import { useRolesStore } from "../../Stores/rol.store";

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
  const { OnGetRoles, roles } = useRolesStore();
  const [formState, setFormState] = useState({
    name: props.name,
    lastName: props.lastName,
    email: props.email,
    rolId: props.rolId,
    password: props.password,
    newPassword: "", // Nuevo campo para la nueva contraseña
    address: {
      department: props.address.department,
      municipality: props.address.municipality,
      complement: props.address.complement,
    },
  });

  useEffect(() => {
    OnGetRoles(1, 5, "");
  }, []);

  const handleCancel = () => {
    props.onCloseModal();
  };

  const handleUpdate = () => {
    // Si se ha ingresado una nueva contraseña, se actualiza el campo password
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
      <RNPickerSelect
        onValueChange={(value) => handleInputChange(value, "rolId")}
        items={roles.map((role) => ({ label: role.name, value: role.id }))}
        style={pickerSelectStyles}
        value={formState.rolId}
      />
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
      />
      <TextInput
        value={formState.address.municipality}
        onChangeText={(value) => handleAddressChange(value, "municipality")}
        style={inputStyle}
      />
      <TextInput
        value={formState.address.complement}
        onChangeText={(value) => handleAddressChange(value, "complement")}
        style={inputStyle}
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

const pickerSelectStyles = {
  inputIOS: {
    fontSize: 16,
    backgroundColor: '#F4F4F4',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: "#00abed",
    borderRadius: 5,
    color: "black",
    paddingRight: 30,
    marginTop: 20,
    margin: 20,

  },
  inputAndroid: {
    fontSize: 16,
    backgroundColor: '#F4F4F4',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: "#00abed",
    borderRadius: 5,
    color: "black",
    paddingRight: 30,
    marginTop: 20,
    margin: 20,
  },
};

export default UpdateUser;