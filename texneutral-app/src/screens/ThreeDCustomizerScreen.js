import { View, Text, Pressable } from 'react-native';
import { useState } from 'react';
import TshirtViewer from '../three/TshirtViewer';

export default function ThreeDCustomizerScreen() {
  const [color, setColor] = useState('#000000');

  return (
    <View style={{ flex:1 }}>
      <View style={{ flex:1 }}>
        <TshirtViewer color={color} />
      </View>
      <View style={{ padding:20 }}>
        <Text>Choose Color</Text>
        <Pressable onPress={() => setColor('#000000')}><Text>Black</Text></Pressable>
        <Pressable onPress={() => setColor('#ffffff')}><Text>White</Text></Pressable>
        <Pressable onPress={() => setColor('#d32f2f')}><Text>Red</Text></Pressable>
      </View>
    </View>
  );
}
