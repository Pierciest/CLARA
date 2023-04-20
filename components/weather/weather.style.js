import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 0.30,
    backgroundColor: "#F9F6EE",
    width: "100%",
    paddingHorizontal: 10,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    opacity: 1,
    shadowOpacity: 0.23,
    flexDirection: "row",
    justifyContent: "space-between",
    },
  weatherContainer: {
    flex: 1,
    justifyContent: "center",
    TextAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },

  textBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  IconBox: {
    marginTop: 15,
    width: 90,
    height: 90,
    borderRadius: 45,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "contain",
  },

  titleText: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
    textAlign: "center",
  },
  descriptionText: {
    fontSize: 12,
    textAlign: "center",
  },
  logoImage: {
    width: "40%",
    height: "40%",
  },

});

export default styles;
