import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  topView: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '70%',
  },
  location: {
    allignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  LocationText: {
    fontSize: 25,
    color: "#F9F6EE",
    fontWeight: "250",
  },
  pin:{
    width: 20,
    height: 20,
    borderRadius: 5,
    marginRight: 10,
  },
  temperatureText: {
    fontSize: 45,
    color: "#F9F6EE",
    textAlign: 'center',
    fontWeight: "250",
  },
  weather: {
    fontSize: 60,
    color: "#F9F6EE",
    textAlign: 'center',
    fontWeight: "250",
  },
  weatherView:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',  }
});

export default styles;
