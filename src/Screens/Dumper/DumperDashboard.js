import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import tailwind from "twrnc";

const DumperDashboard = (props) => {
  const [assigned, setAssigned] = useState({ status: false, id: null });
  // console.log(props);
  const dumper_info = props.userDetails;
  const [shovel_info, setShovel] = useState({});
  const [Dumper_type, setType] = useState();
  const [Dumper_weight, setWeight] = useState();

  useEffect(() => {
    const assigned_status = { status: false, id: "du-0002" };
    if (assigned_status) {
      setAssigned((prev) => ({ ...assigned_status }));
    }
  }, []);

  return (
    <View style={tailwind`flex-1`}>
      <Text>DumperDashboard</Text>
    </View>
  );
};

export default DumperDashboard;

const styles = StyleSheet.create({});
