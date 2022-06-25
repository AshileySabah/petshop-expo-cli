import React from 'react';
import {FlatList, Text, TouchableOpacity, StyleSheet, View} from 'react-native';

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
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.descricao}>{item.descricao}</Text>
            <Text style={styles.preco}>
              R$ {String(item.preco)?.replace('.', ',')}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={id => String(id)}
      />
    </View>
  );
}

const colors = {
  cinza: '#948f8f',
  verde: '#25c244',
  azulBebe: '#ebf3f9',
};

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderTopColor: colors.verde,
    borderTopWidth: 3,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  container: {
    backgroundColor: colors.azulBebe,
    height: '100%',
  },
  nome: {
    fontSize: 20,
    color: colors.verde,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descricao: {
    color: colors.cinza,
    marginBottom: 10,
  },
  preco: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.verde,
  },
});
