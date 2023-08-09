import React from 'react'
import { Dashboard } from './src/Screens/Dashboard'
import { ThemeProvider } from 'styled-components/native'
import AppLoading from 'expo-app-loading'
import theme from './src/global/styles/theme'
import * as SplashScreen from 'expo-splash-screen'

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  )
}
