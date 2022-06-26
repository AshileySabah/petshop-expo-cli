import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import estilos from '../../estilos';

export default function TelaPadrao({children}) {
  return (
    <SafeAreaView style={estilos.preencher}>
      <StatusBar />
      {children}
    </SafeAreaView>
  );
}
