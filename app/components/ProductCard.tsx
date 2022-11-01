import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Product {
  name: string;
  company: string;
  price: number;
  gotoDetail: () => void;
}

const ProductCard = (product: Product) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    console.log(isFavorite);
    if (isFavorite) {
      setIsFavorite(false);
    } else {
      setIsFavorite(true);
    }
  };
  return (
    <View style={styles.productContainer}>
      <TouchableOpacity
        style={styles.productContent}
        onPress={() => product.gotoDetail()}>
        <Image
          source={{
            uri: 'https://reactjs.org/logo-og.png',
          }}
          resizeMode={'cover'}
          style={styles.productImage}
        />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>{product.name || 'default'}</Text>
          <Text style={styles.productCompanyName}>
            {product.company || 'default'}
          </Text>
          <Text style={styles.productPrice}>Rs. {product.price || '5000'}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleFavorite()}>
        <Icon
          style={styles.productFavoriteIcon}
          name={isFavorite === true ? 'heart' : 'heart-o'}
          size={28}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 8,
    marginTop: 10
  },
  productContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productDetails: {
    marginLeft: 16,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 14
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  productCompanyName: {
    fontSize: 14,
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  productFavoriteIcon: {
    padding: 12,
  },
});
