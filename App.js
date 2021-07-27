import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './_src/_componentes/Header';
import Content from './_src/_componentes/Content';
import Footer from './_src/_componentes/Footer';
import { styles } from './_src/_styles/Style';

// import styles from './_src/_styles/Style';


export default function App() {
  return (
    <View style={styles.viewApp}>
      <Header />
      <Content />    
      <Footer />
    </View>
  );
}