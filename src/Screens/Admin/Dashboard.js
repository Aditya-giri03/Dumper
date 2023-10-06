import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const Dashboard = (props) => {
  return (
    <View>
      <Text>Dashboard</Text>
      <Button
        title="Logout"
        onPress={() => {
          props.logout();
        }}
      />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
