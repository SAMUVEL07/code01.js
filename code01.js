import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text>MR.BEAN</Text>
      <View>
        <Text>I tend to be quiet</Text>
        <Image
          source={{
            uri: 'https://i.pinimg.com/200x150/36/ab/6b/36ab6b3183fcc02e09bc03186c6cff91.jpg',
          }}
          style={{width: 200, height: 200}}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="INTROSPECTIVE"
      />
    </ScrollView>
  );
};

export default App;
