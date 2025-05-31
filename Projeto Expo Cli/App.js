import React from 'react';
import { ScrollView, StyleSheet, View, StatusBar } from 'react-native';
import ProductCard from './components/ProductCard';

const products = [
  {
    name: 'Camisa Polo',
    image: 'https://images.tcdn.com.br/img/img_prod/947450/camisa_polo_new_essencial_2mt_bordo_1163_1_e5ae1b1f0f9ceebc99f07c058c48146f.jpg',
    price: 79.9,
  },
  {
    name: 'Tênis Esportivo',
    image: 'https://modaum.cdn.magazord.com.br/img/2023/11/produto/774/01-tenis-esportivo-masculino-olympikus-em-tecido-preto.jpeg?ims=600x600',
    price: 199.9,
  },
  {
    name: 'Relógio Digital',
    image: 'https://imgs.casasbahia.com.br/1567818661/1xg.jpg?imwidth=1000',
    price: 149.9,
  },
  {
    name: 'Fone Bluetooth',
    image: 'https://edifier.com.br/pub/media/catalog/product/f/o/fone_tws_earbuds_preto.jpg',
    price: 89.9,
  },
  {
    name: 'Mochila',
    image: 'https://a-static.mlcdn.com.br/800x560/mochila-masculina-impermeavel-faculdade-alca-reforcada-grande-blend/ifast/a800/8940bddce2efe41e4e63968cb6606cf0.jpeg',
    price: 119.9,
  },
  {
    name: 'Óculos de Sol',
    image: 'https://www.safira.com.br/cdn/imagens/produtos/det/oculos-de-sol-masculino-fila-sfi523-531p-d86895a19a6005bcf3171c63aff65169.jpg',
    price: 59.9,
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BA55D3',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
});