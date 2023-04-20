import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import styles from "./weather.style";

const Wind = require("../../assets/wind.png");
const Direction = require("../../assets/direction.png");
const Humidity = require("../../assets/humidity.png");
const Air = require("../../assets/air.png");

const WeatherSection = ({ icon, description, value }) => {
  return (
    <TouchableOpacity>
      <View style={styles.weatherContainer}>
        <View style={styles.IconBox}>
          <Image style={styles.logoImage} source={icon} />
        </View>
        <View style={styles.textBox}>
          <Text style={styles.titleText}> {description} </Text>
          <Text style={styles.descriptionText}> {value}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Weather = ({ item }) => {
  return (
    <View style={styles.container}>
      <WeatherSection
        icon={Wind}
        description={"Wind"}
        value={item.wind.speed + " m/s"}
      />
      <WeatherSection
        icon={Direction}
        description={"Direction"}
        value={item.wind.deg + "°"}
      />
      <WeatherSection
        icon={Humidity}
        description={"Humidity"}
        value={item.main.humidity + "%"}
      />
      <WeatherSection
        icon={Air}
        description={"Pressure"}
        value={item.main.pressure + " hPa"}
      />
    </View>
  );
};

export default Weather;
