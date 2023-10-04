import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import SelectDropdown from "react-native-select-dropdown";
import tw from "twrnc";
import Track from "../../Components/Track";
import tailwind from "twrnc";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const ShovelDashboard = (props) => {
  // console.log(props);
  const [assigned, setAssigned] = useState({ status: false, id: null });
  const shovel_info = props.userDetails;
  const [dumper_info, setDumper] = useState({});
  const [Dumper_type, setType] = useState();
  const [Dumper_weight, setWeight] = useState();
  const [voice, setVoice] = useState(false);

  useEffect(() => {
    const assigned_status = { status: false, id: "du-0002" };
    if (assigned_status) {
      setAssigned((prev) => ({ ...assigned_status }));
    }
  }, []);

  const request = () => {
    console.log(shovel_info, Dumper_type, Dumper_weight);
    const dumper = {
      vehicle: "du-0002",
      phone: 9911324252,
      coords: { latitude: 27.0985398076631, longitude: 74.06160471901099 },
      type: "Dumper",
      status: "empty",
      assigned: { status: true, id: "sh-0001" },
    };
    if (dumper) {
      console.log(assigned);
      setAssigned({ status: true, id: dumper.vehicle });
      setDumper(dumper);
      console.log(assigned);
    }
  };

  const materialtype = [
    "Rear Discharge",
    "Rear end tractor trailer",
    "Side Discharge",
    "Bottom Discharge",
    "Underground Dump Trucks",
    "Articulated Dump Trucks",
    "Rigid Rear Dump Truck",
  ];
  const weight = ["Heavy", "Medium", "Light"];

  return (
    <View style={styles.container}>
      {!assigned.status ? (
        <View
          style={tw`w-full h-full justify-center items-center bg-slate-300`}
        >
          <View
            style={tw`w-65 h-54 justify-center items-center bg-slate-400 rounded-3xl`}
          >
            <View>
              <Text style={tw`text-black font-bold text-xl text-center my-2`}>
                Select Material Type
              </Text>
              <SelectDropdown
                style={styles.dropdown1}
                buttonStyle={styles.dropdown1BtnStyle}
                buttonTextStyle={styles.dropdown1BtnTxtStyle}
                rowTextStyle={styles.dropdown1RowTxtStyle}
                dropdownStyle={styles.dropdown1DropdownStyle}
                rowStyle={styles.dropdown1RowStyle}
                data={materialtype}
                onSelect={(selectedItem, index) => {
                  setType(selectedItem);
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
            <View>
              <Text style={tw`text-black font-bold text-xl text-center my-2`}>
                Weight of Load
              </Text>
              <SelectDropdown
                style={styles.dropdown2}
                buttonStyle={styles.dropdown1BtnStyle}
                dropdownStyle={styles.dropdown2DropdownStyle}
                buttonTextStyle={styles.dropdown1BtnTxtStyle}
                rowTextStyle={styles.dropdown1RowTxtStyle}
                data={weight}
                onSelect={(selectedItem, index) => {
                  setWeight(selectedItem);
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
          <View>
            <TouchableOpacity
              onPress={() => {
                request();
              }}
            >
              <Text style={styles.but1}>Request Dumper</Text>
            </TouchableOpacity>
          </View>
          {/* <View>
            <TouchableOpacity
              onPress={() => {
                props.logout();
              }}
            >
              <Text style={styles.but2}>Logout</Text>
            </TouchableOpacity>
          </View> */}
        </View>
      ) : (
        <View style={tailwind`h-full w-full items-center`}>
          <View style={tailwind`h-[70%] w-[98%]`}>
            <Track
              source={shovel_info}
              destination={dumper_info}
              // end={setAssigned}
            />
          </View>
          <View>
            <View style={styles.wrapper}>
              <View style={styles.driverInfoContainer}>
                {/* dumper no, phone no,voice channel */}
                <View>
                  <View style={styles.dumperDetailsBox}>
                    <MaterialCommunityIcons
                      name="dump-truck"
                      size={25}
                      color="grey"
                    />
                    <Text style={styles.dumperDetails}>{assigned.id}</Text>
                  </View>
                  <View style={styles.dumperDetailsBox}>
                    <MaterialCommunityIcons
                      name="phone"
                      size={25}
                      color="grey"
                    />
                    <Text style={styles.dumperDetails}>
                      {dumper_info.phone}
                    </Text>
                  </View>
                </View>
                <View style={styles.talkContainer}>
                  <TouchableOpacity
                    style={[
                      styles.talkButton,
                      { backgroundColor: voice ? "green" : "red" },
                    ]}
                    onPress={() => {
                      setVoice((prev) => !prev);
                    }}
                  >
                    {voice ? (
                      <Ionicons name="mic-sharp" color="white" size={30} />
                    ) : (
                      <Ionicons name="mic-off-sharp" color="white" size={30} />
                    )}
                  </TouchableOpacity>
                  <Text>{voice ? "mic on" : "mic off"}</Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => {
                  return Alert.alert(
                    "Are your sure?",
                    "Are you sure you want to Make new Request?",
                    [
                      // The "Yes" button
                      {
                        text: "Yes",
                        onPress: () => {
                          setAssigned({ status: false, id: null });
                        },
                      },
                      // The "No" button
                      // Does nothing but dismiss the dialog when tapped
                      {
                        text: "No",
                      },
                    ]
                  );
                }}
              >
                <Text style={styles.but1}>New Request</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* <View>
            <TouchableOpacity
              onPress={() => {
                props.logout();
              }}
            >
              <Text style={styles.but2}>Logout</Text>
            </TouchableOpacity>
          </View> */}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { textAlign: "center" },
  but1: {
    alignItems: "center",
    textAlign: "center",
    padding: 10,
    borderRadius: 5,
    width: 200,
    marginBottom: 10,
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    elevation: 5,
    backgroundColor: "red",
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

  wrapper: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 6,
    // backgroundColor: 'red',
  },
  driverInfoContainer: {
    // backgroundColor: 'red',
    padding: 15,
    marginBottom: 10,
    width: "85%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    // justifyContent: 'flex-start',
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
  dumperDetailsBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  dumperDetails: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#000",
    marginVertical: 12 / 1.5,
    marginLeft: 8,
    backgroundColor: "white",
  },
  talkContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  talkButton: {
    borderRadius: 100,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
});

export default ShovelDashboard;
