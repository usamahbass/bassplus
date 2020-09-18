import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import HomeStack from "./routes/homeStack";

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  },[])

  return (
    <HomeStack/>
  )
}

export default App;
