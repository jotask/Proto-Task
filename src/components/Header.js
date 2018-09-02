import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={headerContainer}>
      <Text style={header}>
        Create a task
      </Text>
      <Button
        onPress={() => {
          Alert.alert('You tapped the button!');
        }}
        title="Press Me"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    marginTop: 50,
    alignItems: "center",
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
  }
})

const { headerContainer, header } = styles;

export default Header;
