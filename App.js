import React, { useEffect, useState } from "react";
import { Text, View, ImageBackground, SafeAreaView } from "react-native";
import weatherImages from "./Images/images";
import Welcome from "./components/welcome/Welcome";
import Weather from "./components/weather/weather";

const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";
const WEATHER_API_KEY = "YOUR_API_KEY";

const App = () => {
  const [currentWeather, setCurrentWeather] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `${WEATHER_API_URL}?q=Turin&appid=${WEATHER_API_KEY}&units=metric`
        );
        const weatherData = await response.json();
        setCurrentWeather(weatherData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWeather();
  }, []);

  if (!currentWeather) {
    return <Text>Loading...</Text>;
  }

  let backgroundImage = weatherImages[currentWeather.weather[0].icon];

  return (
    <View style={{ flex: 1, margin: 0, padding: 0 }}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <Welcome item={currentWeather} />
        <Weather item={currentWeather} />
      </ImageBackground>
    </View>
  );
};

export default App;
