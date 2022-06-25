import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AntDesign} from '@expo/vector-icons';

export default function Servico({nome, descricao, preco}) {
  const [show, setShow] = useState(false);

  return (
    <TouchableOpacity style={styles.botao}>
      <View style={styles.title}>
        <Text style={styles.nome}>{nome}</Text>
        <TouchableOpacity onPress={() => setShow(!show)}>
          {show ? (
            <AntDesign name="minus" size={24} color={colors.verde} />
          ) : (
            <AntDesign name="plus" size={24} color={colors.verde} />
          )}
        </TouchableOpacity>
      </View>
      {show && (
        <>
          <Text style={styles.descricao}>{descricao}</Text>
          <Text style={styles.preco}>
            R$ {String(preco)?.replace('.', ',')}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
}

const colors = {
  cinza: '#948f8f',
  verde: '#25c244',
  azulBebe: '#ebf3f9',
};

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
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
