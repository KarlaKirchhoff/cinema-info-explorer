// styles/common.ts
import { StyleSheet } from "react-native";

const styles_topbar = StyleSheet.create({
  container: {
    width: "100%",  
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
  pageText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default styles_topbar