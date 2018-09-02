import React from "react";
import { View, StyleSheet } from "react-native";
import { createStackNavigator } from "react-navigation";

const FormRow = props => {
    const { children } = props;
    return(
        <View>
            {children}
        </View>
    )
};

const styles = StyleSheet.create({

})

export default FormRow;