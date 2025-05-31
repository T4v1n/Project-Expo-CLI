import React from 'react';
import { View, Text, Image, StyleSheet, Button, Alert } from 'react-native';

const ProductCard = ({ name, image, price }) => {
  const handleBuy = () => {
    Alert.alert('Compra realizada', `Obrigado por comprar ${name}!`);
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>R$ {price.toFixed(2)}</Text>
      <Button title="Comprar" onPress={handleBuy} color="#9370DB"/>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
});

export default ProductCard;