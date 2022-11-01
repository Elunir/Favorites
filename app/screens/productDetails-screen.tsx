import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ImageSlider} from 'react-native-image-slider-banner';

const ProductDetails = ({route}: any) => {
  const {name, producer, cost, rating, description} = route.params;

  return (
    <View>
      {/* <Image
        style={styles.productImage}
        source={{
          uri: 'https://reactjs.org/logo-og.png',
        }}
        resizeMode={'cover'}
      /> */}
      <ImageSlider
        data={[
          // eslint-disable-next-line prettier/prettier
          { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU' },
          // eslint-disable-next-line prettier/prettier
          { img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg' },
          // eslint-disable-next-line prettier/prettier
          { img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg' },
        ]}
        autoPlay={false}
        onItemChanged={item => console.log('item', item)}
        closeIconColor="#fff"
      />
      <View style={styles.productCard}>
        <View>
          <Text style={styles.productName}>{name}</Text>
          <Text style={styles.productCompanyName}>{producer}</Text>
          <View style={styles.flexRow}>
            <Text style={styles.productPrice}>Rs. {cost}</Text>
            <Text style={styles.productPrice}>Rating {rating}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Icon style={styles.productFavoriteIcon} name={'heart'} size={28} />
        </TouchableOpacity>
      </View>

      <Text style={styles.productDescription}>{description}</Text>
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
