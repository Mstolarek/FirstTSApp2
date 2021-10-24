import React, {useReducer, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const Searchbar = () => {
  const initialState = {input: ''};
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case 'INPUT':
        return {state: {input: action.payload}};
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(payload) => dispatch({type: 'INPUT', payload: payload})}
        placeholder={'Search'}
      />
      {console.log(state)}
      <Text
        style={{
          position: 'absolute',
          top: 100,
          left: 50,
          fontSize: 16,
          color: 'black',
        }}>
        {state.input}
      </Text>
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
