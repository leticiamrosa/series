import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { createStackNavigator } from "react-navigation";

import FormRow from "../components/FormRow";

export default class LoginPage extends React.Component {
  render() {
    return (
      <View>
        <FormRow>
          <TextInput 
          style={styles.input}
          placeholder="user@mail.com"
          underlineColorAndroid='rgba(0,0,0,0)'
          />
        </FormRow>
        <FormRow>
          <TextInput 
          style={styles.input}
          placeholder="******"
          underlineColorAndroid='rgba(0,0,0,0)'
          />
        </FormRow>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 8
  }
});