import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';

const Listing = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const url =
      'http://staging.php-dev.in:8844/trainingapp/api/products/getList?product_category_id=1&limit=10&page=1';

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setList(json.data);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({item}: any) => {
    return (
      <>
        <View style={styles.rowView}>
          <Image
            source={{uri: item.product_images}}
            resizeMode="contain"
            style={styles.thumbnailStyle}
          />

          <View style={{marginLeft: 15, flex: 1}}>
            <Text style={styles.nameStyling}>{item.name}</Text>
            <Text style={styles.producerStyling}>{item.producer}</Text>
            <Text style={styles.costStyling}>{`Rs.${item.cost}`}</Text>
          </View>

          {/* <Image
            source={require('../utility/images/heart.png')}
            resizeMode="contain"
            style={styles.iconStyling}
          /> */}
        </View>
        <View style={styles.bottomLine} />
      </>
    );
  };

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'red'} />
      <View style={styles.headerView}>
        <Text style={styles.headerText}>Products</Text>
      </View>

      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerView: {
    height: 40,
    backgroundColor: 'red',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  rowView: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomLine: {
    height: 0.5,
    backgroundColor: '#D3D3D3',
  },
  thumbnailStyle: {
    height: 80,
    width: 80,
  },
  nameStyling: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
  producerStyling: {
    fontSize: 14,
    color: 'black',
    marginTop: 5,
    marginBottom: 5,
  },
  costStyling: {
    fontSize: 17,
    fontWeight: '800',
    color: 'red',
  },
  iconStyling: {
    height: 25,
    width: 25,
  },
});
export default Listing;
