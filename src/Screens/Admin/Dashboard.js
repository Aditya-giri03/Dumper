import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import tailwind from "twrnc";
import { MaterialCommunityIcons } from "react-native-vector-icons";

const temp = [
  {
    id: 1,
    shovel: "sh-0001",
    dumper: "du-0002",
    shovel_phone: "5786734568",
    dumper_phone: "1232984567",
    dumper_type: "Rear Discharge",
    dumper_weight: "Heavy",
    status: "empty",
  },
  {
    id: 2,
    shovel: "sh-0004",
    dumper: "du-0001",
    shovel_phone: "5786734568",
    dumper_phone: "1232984567",
    dumper_type: "Side Discharge",
    dumper_weight: "Heavy",
    status: "loading",
  },
  {
    id: 3,
    shovel: "sh-0003",
    dumper: "du-0006",
    shovel_phone: "5786734568",
    dumper_phone: "1232984567",
    dumper_type: "Side Discharge",
    dumper_weight: "Light",
    status: "full",
  },
];

const Dashboard = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    setAssignments(temp);
  }, []);

  return (
    <FlatList
      keyExtractor={(item) => {
        return item.id;
      }}
      data={assignments}
      renderItem={({ item, index }) => {
        return (
          <View style={tailwind`flex-1 m-4`}>
            <View
              style={tailwind`flex-1 flex-col w-full bg-white shadow-xl rounded-xl`}
            >
              <View
                style={tailwind`flex-1 items-center px-2 py-1 bg-[#ACF35C] rounded-t-xl`}
              >
                <Text style={tailwind`text-xl font-bold text-black ml-2`}>
                  Assignment-{index + 1}
                </Text>
              </View>
              <View
                style={tailwind`px-3 py-3 w-full flex flex-col justify-between  `}
              >
                <View style={tailwind`pb-4`}>
                  <Text style={tailwind`font-semibold text-lg text-black`}>
                    Phone No : {778778}
                  </Text>
                </View>
                <View
                  style={tailwind`w-full flex flex-row justify-between items-start mb-2`}
                >
                  <View
                    style={tailwind`flex flex-col justify-center items-start`}
                  >
                    <View
                      style={tailwind`flex flex-row justify-center items-center`}
                    >
                      <MaterialCommunityIcons
                        name="dump-truck"
                        size={25}
                        color="#1c8dd9"
                      />
                      <Text style={tailwind`text-xl px-2 `}>Dumper</Text>
                    </View>
                    <View style={tailwind`w-full h-[2px] bg-[#70B7E6]`}></View>
                    <View style={tailwind`pl-2`}>
                      <Text style={tailwind`text-lg font-semibold`}>
                        {item.dumper}
                      </Text>
                      <Text style={tailwind`text-lg `}>
                        {item.dumper_phone}
                      </Text>
                      <Text style={tailwind`text-lg `}>{item.dumper_type}</Text>
                      <Text style={tailwind`text-lg `}>
                        {item.dumper_weight}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={tailwind`flex flex-col justify-center items-start`}
                  >
                    <View
                      style={tailwind`flex flex-row justify-center items-center`}
                    >
                      <MaterialCommunityIcons
                        name="crane"
                        size={30}
                        color="#1c8dd9"
                      />
                      <Text style={tailwind`text-xl px-2`}>Shovel</Text>
                    </View>
                    <View style={tailwind`w-full h-[2px] bg-[#70B7E6]`}></View>
                    <View style={tailwind`pl-2`}>
                      <Text style={tailwind`text-lg font-semibold`}>
                        {item.shovel}
                      </Text>
                      <Text style={tailwind`text-lg `}>
                        {item.shovel_phone}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={tailwind`w-full h-[2px] bg-[#70B7E6] my-2`}></View>
                <View
                  style={tailwind`flex flex-row justify-center items-center`}
                >
                  <MaterialCommunityIcons
                    name="checkbox-blank-circle"
                    color={
                      item.status == "full"
                        ? "red"
                        : item.status == "empty"
                        ? "green"
                        : "purple"
                    }
                  />
                  <Text
                    style={tailwind`text-xl font-semibold px-2 text-center`}
                  >
                    Status :
                  </Text>
                  <Text
                    style={tailwind`text-xl  font-bold text-center capitalize`}
                  >
                    {item.status}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        );
      }}
    />
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
