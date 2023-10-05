import { PermissionAndroid, PermissionsAndroid } from "react-native";

export const requestAudioPermission = async () => {
  try {
    const granted = await PermissionAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
    ]);
    if (
      granted["android.permission.RECORD_AUDIO"] ===
      PermissionAndroid.RESULTS.GRANTED
    ) {
      console.log("You can use the mic");
    } else {
      console.log("Permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};
