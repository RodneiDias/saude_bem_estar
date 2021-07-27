import React, { Component, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../_styles/Style";

export default function Imc() {
    const [valor, setValor] = useState({
        peso: '',
        altura: '',
        conteudo: ''
    })

    const handleInputChange = (name, value) => {
        setValor({
            ...valor, [name]: value
        })
    }
    const calcular = () => {
        const imc = (valor.peso / (valor.altura * valor.altura)).toFixed(2)
        console.log(imc)
        if (imc <= 18.4) {

            setValor({
                ...valor, conteudo: `Abaixo do peso. Fadiga stress ansiedade Peso normal.`
            })
        } else if (imc >= 18.5 && imc <= 24.9) {

            setValor({
                ...valor, conteudo: `Peso Normal. Menor risco de doenças cardíacas e vasculares.`, textColor: 'red'
            })
        } else {

            setValor({
                ...valor, conteudo: `Acima do peso. Fadiga, má circulação e varizes. `
            })
        }



    }
    
    return (
        <View style={styles}>
            <View style={styles.viewImc}>


                <View style={styles.viewBorderImc}>
                    <Text style={styles.txtTitulo}> Confira seu IMC</Text>
                    {/* <Text>Digite seu Peso</Text> */}
                    <TextInput style={styles.visorTxt} placeholder='Digite seu peso' placeholderTextColor='red' onChangeText={(valor) => handleInputChange("peso", Number(valor))} keyboardType="numeric" />
               
                    {/* <Text>Digite sua Altura </Text> */}
                    <TextInput style={styles.visorTxt} placeholder='Digite sua Altura' placeholderTextColor='red' onChangeText={(valor) => handleInputChange("altura", Number(valor))}
                        keyboardType="numeric" />
                
                    <TouchableOpacity style={styles.botoes} onPress={calcular} color="#969696"><Text style={styles.textBotao}>Calcular</Text></TouchableOpacity>
                    
                </View>
                <View>
                    <Text>Resultado:{valor.result}</Text>
                </View>
                <View>
                    <Text style={styles.txtResposta}>{valor.conteudo}</Text>
                </View>
            </View>

        </View>
    )
}