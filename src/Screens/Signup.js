import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import tw from "twrnc";
import { ScrollView } from "react-native";

// import { openDatabase } from "react-native-sqlite-storage";

const Signup = (props) => {
  const [name, set_name] = useState("");
  const [username, set_username] = useState("");
  const [Password, set_pass] = useState("");
  const [agree, set_agree] = useState(false);

  //   let db = openDatabase("user.db");
  // useAnimatedValue;

  const Submit = () => {
    if (username === "" && Password === "") {
      Alert.alert("Please Enter a Valid Username and Password");
    } else {
      Alert.alert("Your Account Has been created Successfully");
      const obj = { name, username, Password };
      props.navigation.navigate("Login", obj);
    }
  };
  return (
    <SafeAreaView style={[tw`bg-blue-50 flex-1 items-center justify-center`]}>
      {/* <ScrollView> */}
      <View style={tw`flex-1 mx-1 justify-center items-center`}>
        <View
          style={tw`flex flex-col bg-white items-center justify-center border shadow-md rounded px-1 pt-6 pb-8 mb-4`}
        >
          <Text style={[tw`pb-10`, { fontSize: 50, color: "#5509be" }]}>
            Create Account
          </Text>
          <View style={tw`relative mb-4`}>
            <Text style={tw` text-gray-700 text-xl font-bold mb-2`}>Name</Text>
            <TextInput
              style={tw` border rounded w-80 py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline `}
              value={name}
              onChangeText={(input) => {
                set_name(input);
              }}
            />
          </View>
          <View style={tw`relative mb-4`}>
            <Text style={tw` text-gray-700 text-xl font-bold mb-2`}>
              Username / E-Mail{" "}
            </Text>
            <TextInput
              style={tw` border rounded w-80 py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline `}
              autoCapitalize="none"
              value={username}
              onChangeText={(input) => {
                set_username(input);
              }}
            />
          </View>
          <View style={tw`relative mb-4`}>
            <Text style={tw` text-gray-700 text-xl font-bold mb-2`}>
              Password
            </Text>
            <TextInput
              style={tw` border rounded w-80 py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline `}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              value={Password}
              onChangeText={(input) => {
                set_pass(input);
              }}
            />
          </View>
          <View
            style={[
              { alignSelf: "flex-start" },
              tw`flex flex-row left-1 items-center p-5`,
            ]}
          >
            <Checkbox
              style={{ width: 30, height: 30 }}
              value={agree}
              onValueChange={() => set_agree(!agree)}
              color={agree ? "#4630EB" : undefined}
            />
            <Text> I agree Terms and conditions </Text>
          </View>
          <View>
            <TouchableOpacity
              disabled={!agree}
              onPress={() => {
                Submit();
              }}
            >
              <Text
                style={
                  !agree
                    ? tw`text-xl bg-gray-700 text-white font-semibold py-2 px-4 border border-white rounded`
                    : tw`text-xl bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded`
                }
              >
                Signup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default Signup;

// const styles = StyleSheet.create({});
