import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
  TextInput,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { useToast } from "react-native-toast-notifications";

import { useState, useEffect } from "react";
import React from "react";
import tailwind from "twrnc";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "react-native-vector-icons";

const Worker = () => {
  const toast = useToast();

  const [openAddModal, setOpenAddModal] = useState(false);
  const [formDataWorker, setFormDataWorker] = useState({
    workerName: null,
    workerPhone: null,
    workerExp: null,
    workerType: null,
  });

  const printRating = (exp) => {
    let rating = [];
    for (let i = 0; i < Math.min(exp / 2, 5); i++) {
      // full star
      rating.push(
        <MaterialCommunityIcons name="star" size={20} color="#0E629A" />
      );
    }
    if (exp < 10 && exp % 2 != 0) {
      // half star
      rating.push(
        <MaterialCommunityIcons name="star-half" size={20} color="#0E629A" />
      );
    }
    return rating;
  };

  const data = [
    {
      workerId: "123",
      workerName: "John Doe",
      workerPhone: "123-456-7890",
      workerExp: 3,
      workerType: "Dumper",
    },
    {
      workerId: "124",
      workerName: "Hagiwara Kenji",
      workerPhone: "123-456-7890",
      workerExp: 7,
      workerType: "Dumper",
    },
    {
      workerId: "125",
      workerName: "Savita Yadav",
      workerPhone: "568-456-7890",
      workerExp: 15,
      workerType: "Shovel",
    },
    {
      workerId: "126",
      workerName: "Morofushi Dai",
      workerPhone: "568-456-7890",
      workerExp: 2,
      workerType: "Dumper",
    },
    {
      workerId: "127",
      workerName: "Mitsuhiko Tsuburaya",
      workerPhone: "568-456-7890",
      workerExp: 4,
      workerType: "Shovel",
    },
  ];
  const submitForm = () => {
    // adding vehicle in database

    setOpenAddModal(false);

    toast.show("Worker Added successfully", {
      type: "success",
      placement: "bottom",
      duration: 2000,
      offset: 30,
      animationType: "slide-in",
    });
  };

  const renderAddModal = () => {
    return (
      <Modal
        visible={openAddModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setOpenAddModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalWrapper}>
            <View style={styles.modalHeader}>
              <Text style={{ fontSize: 20, fontWeight: 500, color: "#828282" }}>
                Add new worker details
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setOpenAddModal(false);
                }}
              >
                <MaterialCommunityIcons
                  name="close"
                  size={30}
                ></MaterialCommunityIcons>
              </TouchableOpacity>
            </View>

            <View style={styles.formContainer}>
              <TextInput
                style={styles.formInput}
                placeholder="Enter Name"
                value={formDataWorker.workerName}
                onChangeText={(input) => {
                  setFormDataWorker({
                    ...formDataWorker,
                    workerName: input,
                  });
                }}
              />

              <TextInput
                style={styles.formInput}
                placeholder="Enter Mobile No."
                value={formDataWorker.workerPhone}
                onChangeText={(input) => {
                  setFormDataWorker({
                    ...formDataWorker,
                    workerPhone: input,
                  });
                }}
              />

              <TextInput
                style={styles.formInput}
                placeholder="Enter Working Experience"
                value={formDataWorker.workerExp}
                onChangeText={(input) => {
                  setFormDataWorker({
                    ...formDataWorker,
                    workerExp: input,
                  });
                }}
                keyboardType="numeric"
              />

              <View style={{ marginVertical: 15 }}>
                <SelectDropdown
                  defaultButtonText="Enter Worker Type"
                  style={{ marginTop: 30 }}
                  buttonStyle={styles.dropdown1BtnStyle}
                  buttonTextStyle={styles.dropdown1BtnTxtStyle}
                  rowTextStyle={styles.dropdown1RowTxtStyle}
                  dropdownStyle={styles.dropdown1DropdownStyle}
                  rowStyle={styles.dropdown1RowStyle}
                  data={["Shovel Driver", "Dumper Driver"]}
                  onSelect={(selectedItem, index) => {
                    setFormDataWorker({
                      ...formDataWorker,
                      workerType: selectedItem,
                    });
                    console.log(selectedItem, index);
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    return item;
                  }}
                />
              </View>

              <TouchableOpacity
                style={[styles.addBtn, { marginTop: 30 }]}
                onPress={() => {
                  submitForm();
                }}
              >
                <MaterialIcons name="person-add" size={30} color="white" />
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 16,
                    fontWeight: "bold",
                    marginLeft: 10,
                  }}
                >
                  Add Worker
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={tailwind`pb-16`}>
      <FlatList
        keyExtractor={(item) => {
          return item.workerId;
        }}
        data={data}
        renderItem={({ item, index }) => {
          return (
            <View style={tailwind`flex-1 flex-col m-4`}>
              <View
                style={tailwind`flex flex-col w-full bg-white shadow-xl rounded-xl`}
              >
                <View
                  style={tailwind`flex-1 flex-row justify-between items-center px-2 py-1 bg-[#ACF35C] rounded-t-xl`}
                >
                  <Text style={tailwind`text-xl font-bold text-black ml-2`}>
                    Worker ID: {item.workerId}
                  </Text>
                  <View style={tailwind`flex flex-row`}>
                    {printRating(item.workerExp)}
                  </View>
                </View>
                <View
                  style={tailwind`px-3 py-3 w-full flex flex-col justify-between  `}
                >
                  <View style={tailwind`pb-4 flex flex-col `}>
                    <View style={tailwind` flex flex-row mb-2`}>
                      <MaterialIcons
                        name="engineering"
                        size={30}
                        color="#3CA0E3"
                      />
                      <Text
                        style={tailwind`pl-2 font-semibold text-lg text-black`}
                      >
                        : {item.workerName}
                      </Text>
                    </View>
                    <View style={tailwind` flex flex-row mb-2`}>
                      <MaterialCommunityIcons
                        name="phone"
                        size={30}
                        color="#3CA0E3"
                      />
                      <Text
                        style={tailwind`pl-2 font-semibold text-lg text-black`}
                      >
                        : {item.workerPhone}
                      </Text>
                    </View>
                    <View style={tailwind` flex flex-row`}>
                      {item.workerType == "dumper" ? (
                        <MaterialCommunityIcons
                          name="dump-truck"
                          size={30}
                          color="#3CA0E3"
                        />
                      ) : (
                        <MaterialCommunityIcons
                          name="crane"
                          size={30}
                          color="#3CA0E3"
                        />
                      )}
                      <Text
                        style={tailwind`pl-2 font-semibold text-lg text-black`}
                      >
                        : {item.workerType}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
      <View style={styles.btnWrapper}>
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => {
            setOpenAddModal(true);
          }}
        >
          <MaterialIcons name="person-add" size={30} color="white" />
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            Add Worker
          </Text>
        </TouchableOpacity>
      </View>
      {renderAddModal()}
    </View>
  );
};

export default Worker;

const styles = StyleSheet.create({
  container: {
    // padding: 16,
    // borderBottomWidth: 1,
    // borderBottomColor: "#ccc",
    // backgroundColor: "#f0f0f0",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#ffffff",
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    marginTop: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "normal",
  },
  workerId: {
    fontSize: 18,
    fontWeight: "bold",
  },

  phone: {
    fontSize: 16,
    color: "#333",
  },

  dropdown1BtnStyle: {
    width: "70%",
    height: 40,
    backgroundColor: "#f5d271",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#444",
  },

  dropdown1DropdownStyle: {
    backgroundColor: "#f5d271",
    width: 220,
    borderRadius: 7,
  },
  dropdown2DropdownStyle: {
    backgroundColor: "#f5d271",
    // width: 220,
    borderRadius: 7,
  },
  dropdown1BtnTxtStyle: { color: "#444", fontSize: 15, textAlign: "left" },
  dropdown1RowTxtStyle: { color: "#444", fontSize: 15, textAlign: "left" },
  dropdown1RowStyle: {
    width: 220,
    borderBottomColor: "#C5C5C5",
  },

  btnWrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: "#fff",
  },
  addBtn: {
    flexDirection: "row",
    height: 45,
    backgroundColor: "#FE7654",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 14,
  },
  modalContainer: {
    // black overlay layer
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalWrapper: {
    position: "relative",
    backgroundColor: "white",
    padding: 15,
    width: "100%",
    height: "80%",
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  formContainer: {
    marginTop: 10,
    paddingVertical: 10,
  },
  formTypeBtnContainer: {
    flexDirection: "row",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 5,
    marginTop: 5,
    marginBottom: 10,
  },
  formTypeBtn: {
    width: "50%",
    height: "100%",
    margin: 7,
    backgroundColor: "#F3F4F8",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 14,
  },
  formInput: {
    padding: 5,
    marginVertical: 15,
    backgroundColor: "#F3F4F8",
    borderRadius: 7,
  },
});
