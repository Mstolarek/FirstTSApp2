import React, {useContext, useState} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import {searchContext} from '../Context/SearchContext';
import SearchContextConsumer from '../Context/searchContextConsumer';

const Searchbar = () => {
  return (
    <View style={styles.container}>
      <SearchContextConsumer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 16,
    alignSelf: 'center',

    width: 400,
    height: 32,
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderColor: 'lightgrey',
    borderRadius: 8,
    borderWidth: 2,
  },
});

export default Searchbar;
