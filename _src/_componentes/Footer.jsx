import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {styles} from "../_styles/Style";

export default function Footer(){
    return (
        <View style={styles.viewFooter}>
           <View >
               <Text style={styles.txtFooter}>Copy@ - Rodnei Dias</Text>
            </View>        
        </View>
    )
}