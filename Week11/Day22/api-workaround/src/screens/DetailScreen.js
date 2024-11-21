import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const DetailScreen = (props) => {
  const { navigation } = props;
  const id = navigation.getParam('id');

  const [result, setResult] = useState('');

  const getResult = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);
      console.log(response);
      setResult(response.data);
    } catch (err) {
      console.log('ERROR', err);
    }
  };

  // use effect with empty array [] second argument to avoid loop, and only call once on mount
  useEffect(() => {
    getResult(id);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Screen</Text>
      <Text>ID: {id}</Text>
      <Text>{result.name}</Text>
      {/* <Text>{result?.name}</Text> */}
      {/* <Text>{result && result.name}</Text> */}
      {/* Alias is for random */}
      <Text>{result.alias}</Text>
      <Text>Hour Open:</Text>

      {result ? (
        <>
          <FlatList
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({ item }) => (
              <Image style={styles.image} source={{ uri: item }} />
            )}
          />
          <Text style={styles.info}>Address: {result.location.address1}</Text>
          <Text style={styles.info}>Phone: {result.display_phone}</Text>
          <Text style={styles.info}>Rating: {result.rating}</Text>
          <Text style={styles.info}>Review Count: {result.review_count}</Text>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default DetailScreen;
