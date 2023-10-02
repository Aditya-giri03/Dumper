import { View, Text, StyleSheet } from "react-native";
import MapView, {
  Marker,
  PROVIDER_GOOGLE,
  Callout,
  MapCallout,
} from "react-native-maps";
import tailwind from "twrnc";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const findColor = (type, status) => {
  if (type == "Dumper") {
    if (status == "empty") return "green";
    else if (status == "filling") return "violet";
    else if (status == "full") return "red";
  } else {
    return "yellow";
  }
};

const LocationMarker = ({ vehicle, type, coords, status, assigned }) => {
  return (
    <Marker
      key={vehicle}
      coordinate={{
        latitude: coords.latitude,
        longitude: coords.longitude,
      }}
      title={assigned.status ? "Assigned" : "Idle"}
      description={assigned.status ? assigned.id : ""}
    >
      {/* need to check not working custom callout */}
      {/* <Callout tooltip>
        <View style={styles.bubble}>
          <Text>{assigned.status ? "Assigned" : "Not Assigned"}</Text>
        </View>
      </Callout> */}
      <View>
        <Text
          style={{
            fontWeight: "bold",
            //   color: "white",
            backgroundColor: "white",
          }}
        >
          {vehicle}
        </Text>
        {/* <Image
                source={require("../../assets/Shovel.png")}
                style={{ width: 35, height: 35 }}
            /> */}
        <MaterialCommunityIcons
          name={type == "Shovel" ? "crane" : "dump-truck"}
          color={findColor(type, status)}
          size={48}
        />
      </View>
    </Marker>
  );
};

export default LocationMarker;

const styles = StyleSheet.create({
  // callout bubble
  bubble: {
    flexDirection: "row",
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 6,
    borderColor: "#ccc",
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },
});
