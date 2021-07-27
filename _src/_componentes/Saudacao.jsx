import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {styles} from "../_styles/Style";

export default function Saudacao(props){

    return (
        <View >      
            <Text style={styles.textSaudacao}>Seja Bem Vindo </Text>
            <Text style={styles.textSaudacao}>Saúde e Bem Estar</Text>
        </View>
    )
}