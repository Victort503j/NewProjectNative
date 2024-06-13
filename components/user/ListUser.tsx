import React, { useEffect, useState } from "react";
import {
    Text,
    ToastAndroid,
    ScrollView,
    View,
    TouchableOpacity,
    TextInput,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useUsersStore } from "../../Stores/user.store";
import { useRolesStore } from "../../Stores/rol.store";
import Pagination from "../Pagination/Pagination";
import { Card } from "@rneui/themed";
import { Modal } from "react-native";
import styles from "../styles/styles";
import UpdateUser from "./UpdateUser";
import CreateUser from "./CreateUser";

function ListUser() {
    const {
        users = [],
        OnGetUsers,
        OnDeleteUser,
        pagination_users,
    } = useUsersStore();
    const {
        OnGetRoles,
    } = useRolesStore();
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
    const [userId, setUserId] = useState(0);

    useEffect(() => {
        OnGetUsers(currentPage, 5, searchQuery);
        OnGetRoles(currentPage, 5, searchQuery);
    }, [currentPage, searchQuery]);

    const handleSearchChange = (text: string) => {
        setSearchTerm(text);
    };

    const handleSearch = () => {
        setSearchQuery(searchTerm.toLowerCase());
        setSearchTerm("");
    };
    const filteredUsers = users
        ? users.filter((r) => r.name.toLowerCase().includes(searchQuery))
        : [];

    const handleChangePage = (page: number) => {
        setCurrentPage(page);
    };

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    const toggleEditModal = () => {
        setEditModalVisible(!editModalVisible);
    };

    const toggleDeleteModal = (id: number) => {
        setSelectedUserId(id);
        setDeleteModalVisible(!deleteModalVisible);
    };

    const handleDelete = () => {
        if (selectedUserId !== null) {
            OnDeleteUser(selectedUserId);
            setDeleteModalVisible(false);
        }
        ToastAndroid.show('Registro eliminado exitosamente!', ToastAndroid.SHORT);
    };

    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ minHeight: "100%" }}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        padding: 10,
                    }}
                >
                    <TextInput
                        style={{
                            flex: 1,
                            marginRight: 10,
                            borderWidth: 1,
                            borderRadius: 5,
                            borderColor: "lightgrey",
                            padding: 8,
                        }}
                        placeholder="Buscar..."
                        value={searchTerm}
                        onChangeText={handleSearchChange}
                        onSubmitEditing={handleSearch}
                    />
                    <TouchableOpacity
                        style={{ backgroundColor: "#00ABED", borderRadius: 5, padding: 10 }}
                        onPress={handleSearch}
                    >
                        <Text style={{ color: "white", fontWeight: "bold", marginTop: 2 }}>
                            Buscar
                        </Text>
                    </TouchableOpacity>
                </View>
                {filteredUsers.length === 0 ? (
                    <Text style={{ textAlign: "center", marginTop: 20, fontSize: 16 }}>
                        No se encontró ningún registro
                    </Text>
                ) : (
                    filteredUsers.map((users) => (
                        <Card key={users.id} containerStyle={styles.card}>
                            <View>
                                <Text>Nombre: {users.name}</Text>
                                <Text>Apellido: {users.lastName}</Text>
                                <Text>Rol: {users.rol.name}</Text>
                                <Text>Email: {users.email}</Text>
                                <Text>Departamento: {users.address.department}</Text>
                                <Text>Municipio: {users.address.municipality}</Text>
                                <Text>Complemento: {users.address.complement}</Text>
                                <View style={styles.buttonContainer}>
                                    <TouchableOpacity
                                        style={styles.button}
                                        onPress={() => {
                                            setUserId(users.id);
                                            toggleEditModal();
                                        }}
                                    >
                                        <FontAwesome name="pencil" size={18} color="white" />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.buttonDelete}
                                        onPress={() => toggleDeleteModal(users.id)}
                                    >
                                        <MaterialIcons
                                            name="delete-forever"
                                            size={18}
                                            color="white"
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Card>
                    ))
                )}
                <View>
                    <Pagination
                        totalPages={pagination_users.totalPag}
                        currentPage={pagination_users.currentPag}
                        onPageChange={handleChangePage}
                    />
                </View>
            </ScrollView>
            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={toggleModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Crear usuario</Text>
                        <CreateUser onCloseModal={toggleModal} />
                    </View>
                </View>
            </Modal>
            <Modal
                visible={deleteModalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => toggleDeleteModal(0)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Deseas eliminar el usuario?</Text>
                        <>
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
                                    onPress={() => toggleDeleteModal(0)}
                                >
                                    <Text
                                        style={{ color: "white", fontWeight: "bold", marginTop: 2 }}
                                    >
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
                                    onPress={handleDelete}
                                >
                                    <Text
                                        style={{ color: "white", fontWeight: "bold", marginTop: 2 }}
                                    >
                                        Aceptar
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    </View>
                </View>
            </Modal>
            <Modal
                visible={editModalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={toggleEditModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Editar Usuario</Text>
                        {users.map((r) => {
                            if (r.id === userId) {
                                return (
                                    <UpdateUser
                                        key={r.id}
                                        id={r.id}
                                        name={r.name}
                                        lastName={r.lastName}
                                        email={r.email}
                                        rolId={r.rolId}
                                        password={r.password}
                                        address={r.address}
                                        onCloseModal={toggleEditModal}
                                    />
                                );
                            }
                            return null;
                        })}
                    </View>
                </View>
            </Modal>
            <TouchableOpacity
                style={{
                    position: "absolute",
                    bottom: 100,
                    right: 30,
                    backgroundColor: "#1A8F13",
                    borderRadius: 50,
                    width: 50,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    elevation: 5,
                }}
                onPress={toggleModal}
            >
                <FontAwesome name="plus" size={20} color="white" />
            </TouchableOpacity>
        </View>
    );
}

export default ListUser;