import { Stack } from 'expo-router'
import { HomeScreen } from 'app/features/home/HomeScreen'
import { LoginScreen } from 'app/features/login/LoginScreen'
import { PostScreen } from 'app/features/post/PostScreen'
import { SettingsScreen } from 'app/features/settings/SettingsScreen'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Home',
        }}
      />
      <HomeScreen />
    </>
  )
}
