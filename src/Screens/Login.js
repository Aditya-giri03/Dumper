import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
// import { ScrollView } from "react-native";

const Login = (props) => {
  const [vehicle, set_vehicle] = useState("");
  const [phone, setPhone] = useState("");
  const Submit = () => {
    // console.log("yes");
    if (vehicle === "du" && phone === "123") {
      props.user({
        vehicle: "du-0002",
        phone: phone,
        type: "Dumper",
        coords: { latitude: 27.0985398076631, longitude: 74.06160471901099 },
        assigned: { status: true, id: "sh-0001" },
        dumper_type: "Rear Discharge",
        dumper_weight: "Heavy",
        status: "empty",
      });
      Alert.alert("Verified Successfully");
      // const obj = { vehicle: vehicle };
      // props.navigation.navigate("Dashboard", obj);
    } else if (vehicle === "sh" && phone === "578") {
      props.user({
        vehicle: "sh-0001",
        phone: phone,
        coords: { latitude: 27.0982614592758, longitude: 74.06279738455889 },
        type: "Shovel",
        assigned: { status: false, id: null },
      });
      Alert.alert("Verified Successfully");
    } else {
      Alert.alert("vehicle or phone Is in correct");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <ScsrollView> */}
      <View style={tw`flex-1 flex-col bg-white items-center  relative`}>
        <View>
          <View style={tw`flex items-center h-60 w-80 p-2`}>
            <Image
              style={tw`w-full h-full `}
              source={require("../../assets/dumper_logo.jpg")}
            />
            {/* <Text style={{ fontSize: 40, color: "#5509be" }}>Welcome Back</Text> */}
          </View>
          <View style={tw`mb-4`}>
            <Text style={tw` text-gray-700 text-xl font-bold mb-2`}>
              Vehicle Number{" "}
            </Text>
            <TextInput
              style={tw`border rounded w-80 py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline`}
              autoCapitalize="none"
              value={vehicle}
              onChangeText={(input) => {
                set_vehicle(input);
              }}
            />
          </View>
          <View style={tw`relative mb-4`}>
            <Text style={tw`text-gray-700 text-xl font-bold mb-2`}>
              Mobile Number
            </Text>
            <TextInput
              style={tw`border rounded w-80 py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline `}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={false}
              value={phone}
              onChangeText={(input) => {
                setPhone(input);
              }}
            />
          </View>
          <View style={tw`flex flex-col items-center justify-center`}>
            {/* <Checkbox checked={false} onChange={()=>{}}/> */}
            <TouchableOpacity
              onPress={() => {
                Submit();
              }}
            >
              <Text
                style={tw` w-40 text-xl bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-center m-3`}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Admin_Login");
            }}
          >
            <Text style={tw`text-base text-blue-700`}>Sign-In as Admin </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default Login;
