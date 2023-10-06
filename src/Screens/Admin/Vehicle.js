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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import tailwind from "twrnc";

const DATA = [
  {
    vehicleNo: "du002",
    vehicleType: "dumper",
    dumper_type: "Side Discharge",
    dumper_weight: "Medium",
  },
  {
    vehicleNo: "du003",
    vehicleType: "dumper",
    dumper_type: "Underground Dump Trucks",
    dumper_weight: "Heavy",
  },
  {
    vehicleNo: "du001",
    vehicleType: "dumper",
    dumper_type: "Articulated Dump Trucks",
    dumper_weight: "Medium",
  },
  {
    vehicleNo: "sh001",
    vehicleType: "shovel",
  },
  {
    vehicleNo: "sh002",
    vehicleType: "shovel",
  },
];

const dumper_ = [
  "Rear Discharge",
  "Rear end tractor trailer",
  "Side Discharge",
  "Bottom Discharge",
  "Underground Dump Trucks",
  "Articulated Dump Trucks",
  "Rigid Rear Dump Truck",
];
const weight = ["Heavy", "Medium", "Light"];

const Vehicle = () => {
  const toast = useToast();
  const [data, setData] = useState(DATA); // arr of obj with each vehicle data
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [vehicleSelected, setVehicleSelected] = useState("dumper");

  const [formDataDumper, setFormDataDumper] = useState({
    vehicleNo: null,
    vehicleType: "dumper",
    dumper_type: null,
    dumper_weight: null,
  });
  const [formDataShovel, setFormDataShovel] = useState({
    vehicleNo: null,
    vehicleType: "shovel",
  });

  const submitForm = () => {
    // adding vehicle in database
    if (vehicleSelected == "shovel") {
    } else {
    }
    setOpenAddModal(false);

    toast.show("Vehicle Added successfully", {
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
                Add new vehicle details
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
              <View style={styles.formTypeBtnContainer}>
                <TouchableOpacity
                  style={[
                    styles.formTypeBtn,
                    vehicleSelected == "dumper" && {
                      backgroundColor: "#FE7654",
                    },
                  ]}
                  onPress={() => setVehicleSelected("dumper")}
                >
                  <Text
                    style={vehicleSelected == "dumper" && { color: "#fff" }}
                  >
                    Dumper
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.formTypeBtn,
                    vehicleSelected == "shovel" && {
                      backgroundColor: "#FE7654",
                    },
                  ]}
                  onPress={() => setVehicleSelected("shovel")}
                >
                  <Text
                    style={vehicleSelected == "shovel" && { color: "#fff" }}
                  >
                    Shovel
                  </Text>
                </TouchableOpacity>
              </View>

              {vehicleSelected == "dumper" ? (
                <View>
                  <TextInput
                    style={styles.formInput}
                    placeholder="Enter Vehicle No."
                    value={formDataDumper.vehicleNo}
                    onChangeText={(input) => {
                      setFormDataDumper({
                        ...formDataDumper,
                        vehicleNo: input,
                      });
                    }}
                  />
                  <View style={{ marginVertical: 15 }}>
                    <SelectDropdown
                      defaultButtonText="Material type"
                      style={{ marginTop: 30 }}
                      buttonStyle={styles.dropdown1BtnStyle}
                      buttonTextStyle={styles.dropdown1BtnTxtStyle}
                      rowTextStyle={styles.dropdown1RowTxtStyle}
                      dropdownStyle={styles.dropdown1DropdownStyle}
                      rowStyle={styles.dropdown1RowStyle}
                      data={dumper_}
                      onSelect={(selectedItem, index) => {
                        setFormDataDumper({
                          ...formDataDumper,
                          dumper_type: selectedItem,
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

                  <View style={{ marginVertical: 15 }}>
                    <SelectDropdown
                      defaultButtonText="Weight of Load"
                      style={{ marginTop: 30 }}
                      buttonStyle={styles.dropdown1BtnStyle}
                      dropdownStyle={styles.dropdown2DropdownStyle}
                      buttonTextStyle={styles.dropdown1BtnTxtStyle}
                      rowTextStyle={styles.dropdown1RowTxtStyle}
                      data={weight}
                      onSelect={(selectedItem, index) => {
                        setFormDataDumper({
                          ...formDataDumper,
                          dumper_weight: selectedItem,
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
                </View>
              ) : (
                <View>
                  <TextInput
                    style={styles.formInput}
                    placeholder="Enter Vehicle Number"
                    value={formDataShovel.vehicleNo}
                    onChangeText={(input) => {
                      setFormDataShovel({
                        ...formDataShovel,
                        vehicleNo: input,
                      });
                    }}
                  />
                </View>
              )}

              <TouchableOpacity
                style={[styles.addBtn, { marginTop: 30 }]}
                onPress={() => {
                  submitForm();
                }}
              >
                <MaterialCommunityIcons
                  name="truck-plus-outline"
                  size={25}
                  color="#fff"
                ></MaterialCommunityIcons>
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 16,
                    fontWeight: "bold",
                    marginLeft: 10,
                  }}
                >
                  Add Vehicle
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
      <View style={tailwind`pb-14`}>
        {isLoading ? (
          <ActivityIndicator size="large" color="black" />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : data.length === 0 ? (
          <Text>No Vehicles Added</Text>
        ) : (
          <FlatList
            keyExtractor={(item) => {
              return item.vehicleNo;
            }}
            data={DATA}
            renderItem={({ item, index }) => {
              return (
                <View style={tailwind`flex-1 flex-col m-4`}>
                  <View
                    style={tailwind`flex flex-col w-full bg-white shadow-xl rounded-xl`}
                  >
                    <View
                      style={tailwind`flex-1 flex-row items-center justify-between px-2 py-1 bg-[#ACF35C] rounded-t-xl`}
                    >
                      <Text style={tailwind`text-xl font-bold text-black ml-2`}>
                        {item.vehicleNo}
                      </Text>
                      {/* <MaterialCommunityIcons
                        name="dump-truck"
                        size={25}
                        color="#1c8dd9"
                      /> */}
                      <MaterialCommunityIcons
                        name={
                          item.vehicleType == "dumper" ? "dump-truck" : "crane"
                        }
                        size={30}
                        color="#3686E9"
                      />
                    </View>
                    <View
                      style={tailwind`px-3 py-3 w-full flex flex-col justify-between  `}
                    >
                      <View style={tailwind`pb-4`}>
                        <View style={tailwind` flex flex-row`}>
                          <Text
                            style={tailwind`pl-2 font-semibold text-lg text-black`}
                          >
                            Vehicle Type :
                          </Text>
                          <Text
                            style={tailwind`pl-2 capitalize text-lg text-black`}
                          >
                            {item.vehicleType}
                          </Text>
                        </View>
                        {/* <View style={tailwind` flex flex-row`}>
                          <Text style={tailwind`pl-2  text-md text-black`}>
                            {item.dumper_type}
                          </Text>
                        </View>
                        <View style={tailwind` flex flex-row`}>
                          <Text style={tailwind`pl-2  text-md text-black`}>
                            {item.weight}
                          </Text>
                        </View> */}
                        {item.vehicleType == "dumper" ? (
                          <View
                            style={tailwind`w-full flex flex-row justify-between my-2`}
                          >
                            <View
                              style={tailwind`flex flex-col justify-center items-center`}
                            >
                              <View
                                style={tailwind`flex flex-row justify-center items-center`}
                              >
                                <MaterialCommunityIcons
                                  name="dump-truck"
                                  size={25}
                                  color="#1c8dd9"
                                />
                                <Text style={tailwind`text-xl px-2 `}>
                                  Type
                                </Text>
                              </View>
                              <View
                                style={tailwind`w-full h-[2px] bg-[#70B7E6]`}
                              ></View>
                              <Text style={tailwind`text-lg font-semibold`}>
                                {item.dumper_type}
                              </Text>
                            </View>
                            <View
                              style={tailwind`flex flex-col justify-center items-center`}
                            >
                              <View
                                style={tailwind`flex flex-row justify-center items-center`}
                              >
                                <MaterialCommunityIcons
                                  name="weight"
                                  size={20}
                                  color="#1c8dd9"
                                />
                                <Text style={tailwind`text-xl px-2`}>
                                  Weight
                                </Text>
                              </View>
                              <View
                                style={tailwind`w-full h-[2px] bg-[#70B7E6]`}
                              ></View>
                              <Text style={tailwind`text-lg font-semibold`}>
                                {item.dumper_weight}
                              </Text>
                            </View>
                          </View>
                        ) : (
                          <></>
                        )}
                      </View>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        )}
      </View>
      <View style={styles.btnWrapper}>
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => {
            setOpenAddModal(true);
          }}
        >
          <MaterialCommunityIcons
            name="truck-plus-outline"
            size={25}
            color="#fff"
          ></MaterialCommunityIcons>
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            Add Vehicle
          </Text>
        </TouchableOpacity>
      </View>
      {renderAddModal()}
    </View>
  );
};

export default Vehicle;

const styles = StyleSheet.create({
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

  container: {
    flex: 1,
    padding: 2,
  },
  // listContainer: {
  //   // height: 500,
  //   padding: 16,
  //   paddingBottom: 100,

  // },
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
