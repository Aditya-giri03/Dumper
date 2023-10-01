import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const DumperDashboard = (props) => {
  return (
    <View>
      <Text>DumperDashboard</Text>
      <Button
        title="Logout"
        onPress={() => {
          props.logout();
        }}
      />
    </View>
  );
};

export default DumperDashboard;

const styles = StyleSheet.create({});
