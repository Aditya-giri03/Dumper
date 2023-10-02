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

const ShovelDashboard = (props) => {
  const [assigned, setAssigned] = useState({ status: false, id: null });
  // console.log(props);
  const shovel_info = props.userDetails;
  const [dumper_info, setDumper] = useState({});
  const [Dumper_type, setType] = useState();
  const [Dumper_weight, setWeight] = useState();

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
          <View style={tailwind`h-[80%] w-[98%]`}>
            <Track
              shovel={shovel_info}
              dumper={dumper_info}
              end={setAssigned}
            />
          </View>
          <View>
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

  dropdown1: {
    position: "absolute",
    backgroundColor: "#fff",
    width: "100%",
    shadowColor: "#000000",
    shadowRadius: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
  },
  dropdown2: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    backgroundColor: "white",
  },
});

export default ShovelDashboard;
