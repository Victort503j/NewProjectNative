import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, ToastAndroid, TextInput } from "react-native";
import { useUsersStore } from "../../Stores/user.store";
import RNPickerSelect from "react-native-picker-select";
import { useRolesStore } from "../../Stores/rol.store";


const CreateUser = ({ onCloseModal }: { onCloseModal: () => void }) => {
  const { OnCreate } = useUsersStore();
  const { OnGetRoles, roles } = useRolesStore();
  const [department, setDepartment] = useState("");
  const [municipality, setMunicipality] = useState("");
  const [complement, setComplement] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rolId, setRolId] = useState(0);

  const CreateUsers = () => {
    OnCreate({
      department,
      municipality,
      complement,
      name,
      lastName,
      email,
      password,
      rolId,
    });
    ToastAndroid.show('Registro guardado exitosamente!', ToastAndroid.SHORT);
    onCloseModal();
  };

  useEffect(() => {
    OnGetRoles(1, 5, "");
  }, []);

  return (
    <>
      <TextInput
        value={name}
        onChangeText={setName}
        style={inputStyle}
        placeholder="Ingrese el nombre del usuario"
      />
      <TextInput
        value={lastName}
        onChangeText={setLastName}
        style={inputStyle}
        placeholder="Ingrese el apellido"
      />
      <RNPickerSelect
        onValueChange={(value) => setRolId(value)}
        items={roles.map((role) => ({ label: role.name, value: role.id }))}
        style={pickerSelectStyles}
        value={rolId}
      />
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={inputStyle}
        placeholder="Ingrese el email"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        style={inputStyle}
        placeholder="Ingrese la contraseña"
        secureTextEntry
      />
      <TextInput
        value={department}
        onChangeText={setDepartment}
        style={inputStyle}
        placeholder="Ingrese el departamento"
      />
      <TextInput
        value={municipality}
        onChangeText={setMunicipality}
        style={inputStyle}
        placeholder="Ingrese el municipio"
      />
      <TextInput
        value={complement}
        onChangeText={setComplement}
        style={inputStyle}
        placeholder="Ingrese el complemento"
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
          onPress={onCloseModal}
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
          onPress={CreateUsers}
        >
          <Text style={{ color: "white", fontWeight: "bold", marginTop: 2 }}>
            Aceptar
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

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
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: "#00abed",
    backgroundColor: '#F4F4F4',
    borderRadius: 5,
    color: "black",
    paddingRight: 30,
    marginTop: 20,
    margin: 20,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: "#00abed",
    backgroundColor: '#F4F4F4',
    borderRadius: 5,
    color: "black",
    paddingRight: 30,
    marginTop: 20,
    margin: 20,
  },
};

export default CreateUser;