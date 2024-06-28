import { StyleSheet } from "react-native";
import Colors from "@/constants/Colors";

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 20,
    paddingVertical: 60,
  },
  textTitle: {
    color: Colors.darkGray,
    fontSize: 50,
    padding: 16,
    fontWeight: "500",
    textAlign: "left",
  },
});
