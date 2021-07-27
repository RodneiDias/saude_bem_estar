import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "../_styles/Style";

export default function Informacoes(props) {

    return (
        <View >
            <View >

                <Text style={styles.txtTitulo}>{props.titulo}</Text>
                <Text style={styles.txtConteudo}>{props.conteudo}</Text>
                <Text style={styles.txtSubtitulo}>{props.subTitulo1}</Text>
                <Text style={styles.txtConteudo}>{props.conteudo1}</Text>
                <Text style={styles.txtSubtitulo}>{props.subTitulo2}</Text>
                <Text style={styles.txtConteudo}>{props.conteudo2}</Text>
                <Text style={styles.txtSubtitulo}>{props.subTitulo3}</Text>
                <Text style={styles.txtConteudo}>{props.conteudo3}</Text>
                <Text style={styles.txtSubtitulo}>{props.subTitulo4}</Text>
                <Text style={styles.txtConteudo}>{props.conteudo4}</Text>
                <Text style={styles.txtSubtitulo}>{props.subTitulo5}</Text>
                <Text style={styles.txtConteudo}>{props.conteudo5}</Text>
            </View>
        </View>
    )
}