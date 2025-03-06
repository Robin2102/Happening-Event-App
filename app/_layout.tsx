import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { router, Stack } from 'expo-router';
import { TouchableOpacity, View, Text} from 'react-native';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="home" />
      <Stack.Screen name="event-details" options={{ headerShown: false }}/>
      <Stack.Screen name="booking" />
    </Stack>
  );
}