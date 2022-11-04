import React, {useState, useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import ProductCard from '../components/ProductCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {data} from '../api/data';
import {useSelector} from 'react-redux';

const Favorites = ({navigation}: any) => {
  const [favoritesData, setFavoritesData] = useState([]);

  const favorites = useSelector((state: any) => state.favorite.favorites);

  useEffect(() => {
    // AsyncStorage.getItem('favorites').then(fav => {
    //   setFavoritesData([fav]);
    // });
    console.log(favorites, 'adherer');
  }, [favorites]);

  if (true) {
    return (
      <FlatList
        data={data}
        renderItem={({item}) =>
          item.isFavorite ? (
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
          ) : null
        }
      />
    );
  } else {
    return (
      <View>
        <Text>No Favorites</Text>
      </View>
    );
  }
};

export default Favorites;
