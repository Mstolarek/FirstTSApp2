import React, {useContext} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import MapView, {Callout, Marker} from 'react-native-maps';
import globalStyles from '../constants/globalStyles';

import Searchbar from '../components/Searchbar';
import {searchContext, useSearchContext} from '../Context/SearchContext';

const MapScreen = () => {
  const {input} = useSearchContext();
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{latitude: 37.78825, longitude: -122.4324}}
          title={'Test Title'}
          description={'Test Description'}>
          <Callout tooltip>
            <View style={styles.alert}>
              <Text style={styles.CalloutTitleText}>Przykladowy tytul</Text>
              <Text style={styles.CalloutDescText}>Przyklady opis</Text>
              <Image
                style={globalStyles.flex}
                source={{uri: 'http://lorempixel.com/400/200/city'}}
              />
            </View>
          </Callout>
        </Marker>
      </MapView>

      <Searchbar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  map: {flex: 1},
  Text: {fontSize: 24, alignSelf: 'center'},
  CalloutTitleText: {fontSize: 16},
  CalloutDescText: {fontSize: 12},
  alert: {
    height: 100,
    width: 100,
    backgroundColor: 'white',
    borderColor: 'grey',
    borderRadius: 8,
    borderWidth: 1,
  },
});

export default MapScreen;
