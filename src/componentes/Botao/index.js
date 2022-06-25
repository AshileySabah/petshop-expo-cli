import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import funcaoEstilosPadrao from './estilos';

export default function Botao({
  pequeno = false,
  invertido = false,
  valor,
  acao,
  estilos,
}) {
  const estiloPadrao = funcaoEstilosPadrao(pequeno, invertido);

  return (
    <TouchableOpacity onPress={acao} style={[estiloPadrao.botao, estilos]}>
      <Text style={estiloPadrao.valor}>{valor}</Text>
    </TouchableOpacity>
  );
}
