import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Login from "./src/Screens/Login";
import Signup from "./src/Screens/Signup";
import Dashboard from "./src/Screens/Dashboard";
import { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import tw from "twrnc";
import Map from "./src/Screens/Map";
import ShovelDashboard from "./src/Screens/Shovel/ShovelDashboard";
import DumperDashboard from "./src/Screens/Dumper/DumperDashboard";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const [user, setUser] = useState(null);

  const signout = () => {
    setUser(null);
  };

  if (user?.type == "Dumper") {
    console.log("dumper");
    return (
      <SafeAreaView>
        <NavigationContainer>
          <View style={tw`w-full h-full flex flex-col`}>
            {/* <View style={tw`h-90%`}> */}
            <Tab.Navigator
              screenOptions={{
                tabBarActiveTintColor: "tomato",
                tabBarInactiveTintColor: "gray",
                tabBarLabelStyle: { fontSize: 15, paddingBottom: 6 },
                tabBarStyle: {
                  height: 70,
                  position: "fixed",
                  bottom: 0,
                },
              }}
              initialRouteName="Dashboard"
            >
              <Tab.Screen
                name="Dashboard"
                // component={Dashboard}
                options={{
                  tabBarLabel: "Dashboard",
                  tabBarIcon: ({ focused }) => {
                    return (
                      <Ionicons
                        name={focused ? "home" : "home-outline"}
                        size={30}
                        color={focused ? "tomato" : "gray"}
                      />
                    );
                  },
                }}
              >
                {(props) => (
                  <DumperDashboard
                    {...props}
                    username={user}
                    logout={signout}
                  />
                )}
              </Tab.Screen>
              <Tab.Screen
                name="Map"
                // component={Map}
                options={{
                  tabBarLabel: "Map",
                  tabBarIcon: ({ focused }) => {
                    return (
                      <Ionicons
                        name={focused ? "map" : "map-outline"}
                        size={30}
                        color={focused ? "tomato" : "gray"}
                      />
                    );
                  },
                }}
              >
                {(props) => <Map {...props} vehicle={user?.vehicle} />}
              </Tab.Screen>
            </Tab.Navigator>
          </View>
        </NavigationContainer>
        <StatusBar style="light" backgroundColor="rgba(0, 0, 0, 0.6)" />
      </SafeAreaView>
    );
  } else if (user?.type == "Shovel") {
    console.log(user, user.vehicle);
    return (
      <SafeAreaView>
        <NavigationContainer>
          <View style={tw`w-full h-full flex flex-col`}>
            {/* <View style={tw`h-90%`}> */}
            <Tab.Navigator
              screenOptions={{
                tabBarActiveTintColor: "tomato",
                tabBarInactiveTintColor: "gray",
                tabBarLabelStyle: { fontSize: 15, paddingBottom: 6 },
                tabBarStyle: {
                  height: 70,
                  position: "fixed",
                  bottom: 0,
                },
              }}
              initialRouteName="Dashboard"
            >
              <Tab.Screen
                name="Dashboard"
                // component={ShovelDashboard}
                options={{
                  tabBarLabel: "Dashboard",
                  tabBarIcon: ({ focused }) => {
                    return (
                      <Ionicons
                        name={focused ? "home" : "home-outline"}
                        size={30}
                        color={focused ? "tomato" : "gray"}
                      />
                    );
                  },
                }}
              >
                {(props) => (
                  <ShovelDashboard
                    {...props}
                    username={user}
                    logout={signout}
                  />
                )}
              </Tab.Screen>
              <Tab.Screen
                name="Map"
                // component={Map}
                options={{
                  tabBarLabel: "Map",
                  tabBarIcon: ({ focused }) => {
                    return (
                      <Ionicons
                        name={focused ? "map" : "map-outline"}
                        size={30}
                        color={focused ? "tomato" : "gray"}
                      />
                    );
                  },
                }}
              >
                {(props) => <Map {...props} vehicle={user?.vehicle} />}
              </Tab.Screen>
            </Tab.Navigator>
          </View>
        </NavigationContainer>
        <StatusBar style="light" backgroundColor="rgba(0, 0, 0, 0.6)" />
      </SafeAreaView>
    );
  }
  console.log("null");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login">
            {(props) => <Login {...props} user={setUser} />}
          </Stack.Screen>
          <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" backgroundColor="rgba(0, 0, 0, 0.6)" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
