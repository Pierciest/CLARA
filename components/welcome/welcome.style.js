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
    width: "20%",
  },
  LocationText: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "200",
  },
  pin:{
    width: 20,
    height: 20,
    borderRadius: 5,
    marginRight: 10,
  },
  temperatureText: {
    fontSize: 45,
    color: "#fff",
    textAlign: 'center',
    fontWeight: "200",
  },
  weather: {
    fontSize: 70,
    color: "#fff",
    textAlign: 'center',
    fontWeight: "200",
  },
  weatherView:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',  }
});

export default styles;
