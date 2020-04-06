import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text> Hello World</Text>
    </SafeAreaView>
  );
};

export default App;
