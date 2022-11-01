import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProductDetails = () => {
  return (
    <View>
      <Image
        style={styles.productImage}
        source={{
          uri: 'https://reactjs.org/logo-og.png',
        }}
        resizeMode={'cover'}
      />
      <View style={styles.productCard}>
        <View>
          <Text style={styles.productName}>Coffee Table</Text>
          <Text style={styles.productCompanyName}>Luna</Text>
          <View style={styles.flexRow}>
            <Text style={styles.productPrice}>Rs. 5000</Text>
            <Text style={styles.productPrice}>Rating 3</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Icon style={styles.productFavoriteIcon} name={'heart'} size={28} />
        </TouchableOpacity>
      </View>

      <Text style={styles.productDescription}>Description</Text>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  productImage: {
    width: '100%',
    height: 300,
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
  productDescription: {
    fontSize: 16,
    margin: 16,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    marginRight: 20,
  },
  productFavoriteIcon: {},
  productCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 16,
  },
  flexRow: {
    flexDirection: 'row',
  },
});
