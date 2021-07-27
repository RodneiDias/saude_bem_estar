import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "../_styles/Style";

export default function Informacoes(props) {

    return (
        <View >
            <View >

                <Text style={styles.txtTitulo}>{props.titulo}</Text>
                <Text style={styles.txtAutor}>{props.autor}</Text>
                <Text style={styles.txtConteudo}>{props.conteudo}</Text>

            </View>
        </View>
    )
}