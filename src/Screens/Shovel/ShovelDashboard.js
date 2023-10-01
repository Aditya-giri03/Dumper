import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SelectDropdown from "react-native-select-dropdown";
import tw from "twrnc";

const ShovelDashboard = (props) => {
  const materialtype = ["Egypt", "Canada", "Australia", "Ireland"];
  const weight = ["Heavy", "Medium", "Light"];

  const [assigned, setAssigned] = useState(false);
  return (
    <View>
      <View>
        <View>
          <Text style={tw`text-red-700 font-bold text-xl`}>
            Select Material Type
          </Text>
          <SelectDropdown
            data={materialtype}
            onSelect={(selectedItem, index) => {
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
          <Text style={tw`text-red-700 font-bold text-xl`}>Weight of Load</Text>
          <SelectDropdown
            data={weight}
            onSelect={(selectedItem, index) => {
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
      <Button
        title="Logout"
        onPress={() => {
          props.logout();
        }}
      />
    </View>
  );
};

export default ShovelDashboard;

const styles = StyleSheet.create({});
