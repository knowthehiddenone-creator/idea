import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ThreeDCustomizerScreen from '../screens/ThreeDCustomizerScreen';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="3DCustomizer" component={ThreeDCustomizerScreen} />
    </Stack.Navigator>
  );
}
