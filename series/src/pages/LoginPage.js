import React from "react";
import { View, Text, TextInput } from "react-native";
import { createStackNavigator } from "react-navigation";

import FormRow from "../components/FormRow";

export default class LoginPage extends React.Component {
  render() {
    return (
      <View>
        <FormRow>
          <TextInput />
        </FormRow>
      </View>
    );
  }
}
