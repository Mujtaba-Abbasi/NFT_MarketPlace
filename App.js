import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { useEffect, useCallback } from "react";
// import * as SplashScreen from 'expo-splash-screen';

import Home from './screens/Home'
import Details from './screens/Details'

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  color:{
    background: "transparent",
  },
}

const App = () =>{
  const [loaded] = useFonts({
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-Light': require('./assets/fonts/Inter-Light.ttf'),
  });

  // useEffect(() => {
  //   async function prepare() {
  //     await SplashScreen.preventAutoHideAsync();
  //   }
  //   prepare();
  // }, []);

  // const onLayoutRootView = useCallback(async () => {
  //   if (loaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [loaded]);


  if(!loaded) return null;

  return (
      <NavigationContainer theme={theme}>
        <Stack.Navigator screenOption={{headerShown : false}} initialRouteName='Home'> 
          <Stack.Screen name='Home' component={Home} options={{headerShown: false}} />
          <Stack.Screen name='Details' component={Details} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}


export default App;