import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Servico from './Servico';

export default function Servicos() {
  const servicos = [
    {
      id: 1,
      nome: 'Banho',
      preco: 79.9,
      descricao: 'NÃO DE BANHO NO SEU GATO! Mas se precisar nós damos.',
    },
    {
      id: 2,
      nome: 'Vacina V4',
      preco: 89.9,
      descricao: 'Uma dose da vacina V4. Seu gato precisa de duas.',
    },
    {
      id: 3,
      nome: 'Vacina Antirrábica',
      preco: 99.9,
      descricao:
        'Uma dose da vacina antirrábica. Seu gato precisa de uma por ano.',
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={servicos}
        renderItem={({item}) => (
          <Servico
            nome={item.nome}
            descricao={item.descricao}
            preco={item.preco}
          />
        )}
        keyExtractor={id => String(id)}
      />
    </View>
  );
}

const colors = {
  azulBebe: '#ebf3f9',
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.azulBebe,
    height: '100%',
  },
});
