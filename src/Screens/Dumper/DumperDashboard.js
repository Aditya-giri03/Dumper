import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import tailwind from "twrnc";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Track from "../../Components/Track";

const DumperDashboard = (props) => {
  const [assigned, setAssigned] = useState({ status: false, id: null });
  const [loadPercentage, setLoadPercentage] = useState(40);
  const [status, setStatus] = useState("full");
  const [shovel_info, setShovel] = useState();
  const [voice, setVoice] = useState(false);
  // console.log(props);
  const dumper_info = props.userDetails;

  useEffect(() => {
    const assigned_status = { status: false, id: null };
    if (assigned_status) {
      setAssigned((prev) => ({ ...assigned_status }));
    }
  }, []);

  const request = () => {
    const shovel = {
      vehicle: "sh-0001",
      phone: "578",
      coords: { latitude: 27.0982614592758, longitude: 74.06279738455889 },
      type: "Shovel",
      assigned: { status: true, id: "du-0002" },
    };
    if (shovel) {
      console.log(assigned);
      setAssigned({ status: true, id: shovel.vehicle });
      setShovel(shovel);
      console.log(assigned);
    }
  };

  return (
    <View style={tailwind`h-full w-full `}>
      {!assigned.status ? (
        <View style={tailwind` shadow-xl rounded-lg  m-4`}>
          <View
            style={tailwind`flex flex-row rounded-t-md justify-center items-center px-2 py-1 bg-[#ACF35C]`}
          >
            <Text style={tailwind`text-xl font-bold text-black ml-2`}>
              {dumper_info.vehicle}
            </Text>
          </View>
          <View
            style={tailwind`px-3 py-3 bg-white  w-full flex flex-col justify-between`}
          >
            <View style={tailwind`pb-4`}>
              <Text style={tailwind`font-semibold text-lg text-black`}>
                Phone No : {dumper_info.phone}
              </Text>
            </View>
            <View style={tailwind`w-full flex flex-row justify-between mb-2`}>
              <View style={tailwind`flex flex-col justify-center items-center`}>
                <View
                  style={tailwind`flex flex-row justify-center items-center`}
                >
                  <MaterialCommunityIcons
                    name="dump-truck"
                    size={25}
                    color="#1c8dd9"
                  />
                  <Text style={tailwind`text-xl px-2 `}>Type</Text>
                </View>
                <View style={tailwind`w-full h-[2px] bg-[#70B7E6]`}></View>
                <Text style={tailwind`text-lg font-semibold`}>
                  {dumper_info.dumper_type}
                </Text>
              </View>
              <View style={tailwind`flex flex-col justify-center items-center`}>
                <View
                  style={tailwind`flex flex-row justify-center items-center`}
                >
                  <MaterialCommunityIcons
                    name="weight"
                    size={20}
                    color="#1c8dd9"
                  />
                  <Text style={tailwind`text-xl px-2`}>Weight</Text>
                </View>
                <View style={tailwind`w-full h-[2px] bg-[#70B7E6]`}></View>
                <Text style={tailwind`text-lg font-semibold`}>
                  {dumper_info.dumper_weight}
                </Text>
              </View>

              {/* <Text style={tailwind`text-lg`}>Time : {time}</Text>
            <Text style={tailwind`text-lg`}>Start : {data.source}</Text>
            <Text style={tailwind`text-lg`}>End : {data.destination}</Text> */}
            </View>
            {/* <View style={tailwind`w-full h-[2px] bg-[#70B7E6]`}></View> */}
            <View style={tailwind`flex flex-row justify-center items-center`}>
              <MaterialCommunityIcons
                name="checkbox-blank-circle"
                color={
                  status == "full"
                    ? "red"
                    : status == "empty"
                    ? "green"
                    : "purple"
                }
              />
              <Text style={tailwind`text-xl font-semibold px-2 text-center`}>
                Status :
              </Text>
              <Text style={tailwind`text-xl  font-bold text-center capitalize`}>
                {status}
              </Text>
            </View>
            {/* <View style={tailwind`w-full flex flex-row justify-between`}>
            <PdfGenerator items={data} />
  
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Create Invoice", {
                  id: props.id,
                  data: data,
                  edit: true,
                });
              }}
              style={tailwind`shadow-md rounded-md flex flex-row  items-center justify-center px-4 py-2 bg-[#3F94EF]`}
            >
              <MaterialCommunityIcons
                name="file-edit-outline"
                size={30}
                color="white"
              />
              <Text style={tailwind`text-white px-1`}>Edit</Text>
            </TouchableOpacity>
          </View> */}
            <Button
              title="request"
              onPress={() => {
                request();
              }}
            />
          </View>
        </View>
      ) : (
        <View style={tailwind`h-[70%] w-[100%]flex flex-col items-center`}>
          <View style={tailwind`h-[65%] w-[98%]`}>
            <Track
              source={dumper_info}
              destination={shovel_info}
              end={setAssigned}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              setAssigned({ status: false, id: null });
            }}
          >
            <Text>Back</Text>
          </TouchableOpacity>

          <View style={styles.wrapper}>
            <View style={styles.driverInfoContainer}>
              {/* vehicle no, phone no,voice channel */}
              <View>
                <View style={styles.dumperDetailsBox}>
                  <MaterialCommunityIcons name="crane" size={25} color="grey" />
                  <Text style={styles.dumperDetails}>{assigned.id}</Text>
                </View>
                <View style={styles.dumperDetailsBox}>
                  <MaterialCommunityIcons name="phone" size={25} color="grey" />
                  <Text style={styles.dumperDetails}>{dumper_info.phone}</Text>
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
          </View>
        </View>
      )}
      <View style={styles.statusContainer}>
        <View style={styles.statusImageWrapper}>
          <Image
            // style={tailwind`w-full h-full`}
            style={styles.statusImage}
            source={require("../../../assets/dumper_status.jpeg")}
            resizeMode="stretch"
          ></Image>
          <View style={styles.loadStatusBoxContainer}>
            <View style={styles.loadStatusBoxColor(loadPercentage)}>
              <Text style={styles.loadStatusPercentage}>{loadPercentage}%</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DumperDashboard;

const styles = StyleSheet.create({
  statusContainer: {
    height: 180,
    marginHorizontal: 10,
    paddingVertical: 18,
    paddingHorizontal: 5,
    backgroundColor: "#FFF",
    borderRadius: 8,
    justifyContent: "space-between",

    shadowColor: "#F3F4F8",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
  statusImageWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    position: "relative",
  },
  statusImage: {
    width: "100%",
    height: 150,
  },
  loadStatusBoxContainer: {
    justifyContent: "center",
    alignItems: "start",
    position: "absolute",
    borderRadius: 5,
    top: "20%",
    left: "39%",
    height: "42%",
    width: "57%",
  },
  loadStatusBoxColor: (percentage) => ({
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:
      percentage < 50
        ? "rgba(0,255,0,0.5)"
        : percentage < 70
        ? "rgba(255, 191, 0,0.5)"
        : "rgba(255,0,0,0.5)",
    width: `${percentage}%`,
    height: "100%",
    borderRadius: 5,
  }),

  loadStatusPercentage: {
    zIndex: 10,
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    opacity: 1,
    // fontWeight: 200,
  },
  // Info Card - CSS
  wrapper: {
    // height: 400,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 6,
    width: "100%",
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
