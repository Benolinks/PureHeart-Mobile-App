import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import "../../global.css";
import { useEffect } from "react";


export default function RootLayout() {

  const [fontsLoaded] = useFonts({
    // "PlusJakartaSans-Light": require("../../assets/Plus_Jakarta_Sans/static/PlusJakartaSans-Light.ttf"),

    "PlusJakartaSans-Medium": require("../../assets/Plus_Jakarta_Sans/static/PlusJakartaSans-Medium.ttf"),

    "PlusJakartaSans-Regular": require("../../assets/Plus_Jakarta_Sans/static/PlusJakartaSans-Regular.ttf"),

    "PlusJakartaSans-Italic": require("../../assets/Plus_Jakarta_Sans/static/PlusJakartaSans-Italic.ttf"),

    "PlusJakartaSans-Bold": require("../../assets/Plus_Jakarta_Sans/static/PlusJakartaSans-Bold.ttf"),

    "PlusJakartaSans-ExtraBold": require("../../assets/Plus_Jakarta_Sans/static/PlusJakartaSans-ExtraBold.ttf"),


    // "PlusJakartaSans-SemiBold": require("../../assets/Plus_Jakarta_Sans/static/PlusJakartaSans-SemiBold.ttf"),
    // "PlusJakartaSans-Thin": require("../../assets/Plus_Jakarta_Sans/static/PlusJakartaSans-Thin.ttf"),
    // "PlusJakartaSans-ExtraLight": require("../../assets/Plus_Jakarta_Sans/static/PlusJakartaSans-ExtraLight.ttf"),
    // "PlusJakartaSans-Black": require("../../assets/Plus_Jakarta_Sans/static/PlusJakartaSans-Black.ttf"),
    // "PlusJakartaSans-ExtraBoldItalic": require("../../assets/Plus_Jakarta_Sans/static/PlusJakartaSans-ExtraBoldItalic.ttf"),
    // "PlusJakartaSans-BoldItalic": require("../../assets/Plus_Jakarta_Sans/static/PlusJakartaSans-BoldItalic.ttf"),
    // "PlusJakartaSans-ExtraLightItalic": require("../../assets/Plus_Jakarta_Sans/static/PlusJakartaSans-ExtraLightItalic.ttf"),
    // "PlusJakartaSans-LightItalic": require("../../assets/Plus_Jakarta_Sans/static/PlusJakartaSans-LightItalic.ttf"),
    // "PlusJakartaSans-MediumItalic": require("../../assets/Plus_Jakarta_Sans/static/PlusJakartaSans-MediumItalic.ttf"),
    // "PlusJakartaSans-RegularItalic": require("../../assets/Plus_Jakarta_Sans/static/PlusJakartaSans-RegularItalic.ttf"),
    // "PlusJakartaSans-SemiBoldItalic": require("../../assets/Plus_Jakarta_Sans/static/PlusJakartaSans-SemiBoldItalic.ttf"),
    // "PlusJakartaSans-ThinItalic": require("../../assets/Plus_Jakarta_Sans/static/PlusJakartaSans-ThinItalic.ttf"),
    // "PlusJakartaSans-BlackItalic": require("../../assets/Plus_Jakarta_Sans/static/PlusJakartaSans-BlackItalic.ttf")
  });

 useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
 

  if (!fontsLoaded) {
    return null; 
  }









  return <Stack screenOptions={{ headerShown: false }} />;
}

