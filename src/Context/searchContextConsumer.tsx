import React, {useContext} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {searchContext, useSearchContext} from './SearchContext';

const SearchContextConsumer = () => {
  const {input, setInput} = useSearchContext();
  return (
    <TextInput
      style={styles.input}
      onChangeText={(x) => setInput(x)}
      placeholder={'Search'}
    />
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
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

export default SearchContextConsumer;
