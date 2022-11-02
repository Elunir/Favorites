import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import ProductCard from '../components/ProductCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {data} from '../api/data';

const Favorites = ({navigation}: any) => {
  const [favoritesData, setFavoritesData] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('favorites').then(fav => {
      setFavoritesData([fav]);
    });
  }, [favoritesData]);
  if (favoritesData.length > 0) {
    return (
      <FlatList
        data={data}
        renderItem={({item}) =>
          item.isFavorite ? (
            <ProductCard
              name={item.name}
              company={item.producer}
              price={item.cost}
              image={item.product_images}
              isFavorite={item.isFavorite}
              gotoDetail={() => {
                navigation.navigate('ProductDetails', item);
              }}
            />
          ) : null
        }
      />
    );
  }
};

export default Favorites;
