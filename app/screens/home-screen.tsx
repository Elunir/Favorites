import React from 'react';
import {FlatList} from 'react-native';
import ProductCard from '../components/ProductCard';
import {data} from '../api/data';

const HomeScreen = ({navigation}: any) => {

  // const favorites = useSelector((state: any) => state.favorite.favorites);

  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <ProductCard
          id={item.id}
          name={item.name}
          company={item.producer}
          price={item.cost}
          image={item.product_images}
          isFavorite={item.isFavorite}
          gotoDetail={() => {
            navigation.navigate('ProductDetails', item);
          }}
        />
      )}
    />
  );
};

export default HomeScreen;
