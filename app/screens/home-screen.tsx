import React from 'react';
import {FlatList, View} from 'react-native';
import ProductCard from '../components/ProductCard';
import {data} from '../api/data';

const HomeScreen = ({navigation}: any) => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <ProductCard
            name={item.name}
            company={item.producer}
            price={item.cost}
            gotoDetail={() => {
              navigation.navigate('ProductDetails', item);
            }}
          />
        )}
      />
      {/* <Listing /> */}
    </View>
  );
};

export default HomeScreen;
