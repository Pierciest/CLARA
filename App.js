import React, { useEffect, useState } from "react";
import { Text, View, ImageBackground } from "react-native";
import weatherImages from "./Images/images"; // assuming you have the weatherImages module with the images
import Welcome from "./components/welcome/Welcome";
import Weather from "./components/weather/weather";

const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";
const WEATHER_API_KEY = "0079f8e00d7062639673890db026a633";

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
    <View>
      <ImageBackground source={backgroundImage} style={{ flex: 1 }}>
        <Welcome item={currentWeather} />
        <Weather item={currentWeather} />
      </ImageBackground>
    </View>
  );
};

export default App;
