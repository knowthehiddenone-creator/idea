import { View, Text, Pressable } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text style={{ fontSize:28, marginBottom:20 }}>Texneutral T-Shirts</Text>
      <Pressable onPress={() => navigation.navigate('3DCustomizer')}>
        <Text style={{ color:'red', fontSize:18 }}>Open 3D Customizer</Text>
      </Pressable>
    </View>
  );
}
