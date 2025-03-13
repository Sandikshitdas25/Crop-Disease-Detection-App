import { View, Text } from 'react-native'
import "../global.css"
import { useFonts } from "expo-font";
import { Stack } from 'expo-router';

const _layout = () => {
    const[fontsLoaded] = useFonts({
        "Rubik-Bold": require("../assets/fonts/Rubik-Bold.ttf"),
        "Rubik-ExtraBold": require("../assets/fonts/Rubik-ExtraBold.ttf"),
        "Rubik-Light": require("../assets/fonts/Rubik-Light.ttf"),
        "Rubik-Medium": require("../assets/fonts/Rubik-Medium.ttf"),
        "Rubik-Regular": require("../assets/fonts/Rubik-Regular.ttf"),
        "Rubik-SemiBold": require("../assets/fonts/Rubik-SemiBold.ttf")
      })
    return (
        <Stack screenOptions={{headerShown: false}}/>
    )
}

export default _layout