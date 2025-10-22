import { useFonts } from "@expo-google-fonts/montserrat";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import fonts from "../config/theme/fonts";
import "../styles/global.css";

export default function RootLayout() {
  const [fontsLoaded] = useFonts(fonts);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return <Stack />;
}
