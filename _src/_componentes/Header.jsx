import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {styles} from "../_styles/Style";

export default function Header(){
    return (
        <View style={styles.caixaHeader}>
            <View style={styles.viewHeader}>
                <Text style={styles.textHeader}>SoulHealth</Text>
            </View>            
        </View>
    )
}

