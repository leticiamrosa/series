import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

import FormRow from "../components/FormRow";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  input: {
    padding: 8
  }
});

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  onChangeHandle(field, value) {
    this.setState({ [field]: value });
  }

  render() {
    const { email } = this.state;
    const { password } = this.state;
    return (
      <View style={styles.container}>
        <FormRow>
          <TextInput
            style={styles.input}
            placeholder="user@mail.com"
            underlineColorAndroid="rgba(0,0,0,0)"
            onChangeText={value => this.onChangeHandle("email", value)}
            value={email}
          />
        </FormRow>
        <FormRow>
          <TextInput
            style={styles.input}
            placeholder="******"
            underlineColorAndroid="rgba(0,0,0,0)"
            secureTextEntry
            onChangeText={value => this.onChangeHandle("password", value)}
            value={password}
          />
        </FormRow>
      </View>
    );
  }
}
