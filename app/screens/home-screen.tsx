import React, {useEffect} from 'react';
import {View} from 'react-native';
import ProductCard from '../components/ProductCard';

const HomeScreen = ({navigation}: any) => {
  const PRODUCTS_API =
    'http://staging.php-dev.in:8844/trainingapp/api/products/getList?product_category_id=1&limit=10&page=1';
  useEffect(() => {
    fetch(PRODUCTS_API).then(console.log).catch(console.log);
  }, []);
  return (
    <View>
      <ProductCard
        name={'Coffee Table'}
        company={'Luna'}
        price={5000}
        gotoDetail={() => {
          navigation.navigate('ProductDetails');
        }}
      />
    </View>
  );
};

export default HomeScreen;
