import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const Searchbar = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder={'Search'} />
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
  input: {
    color: 'black',
    fontSize: 16,
    textAlign: 'left',
    justifyContent: 'center',
    left: 10,
    top: 5,
    right: 10,
  },
});

export default Searchbar;
