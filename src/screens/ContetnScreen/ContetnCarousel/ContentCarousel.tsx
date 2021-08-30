import React, {FC} from 'react';
import {View, Image, useWindowDimensions, StyleSheet} from 'react-native';
import {PlaceStubType} from '../../../types';
import {default as RNCarousel, Pagination} from 'react-native-snap-carousel';
import {useCallback} from 'react';
import globalStyles from '../../../constants/globalStyles';
import {useState} from 'react';

type Props = {data: PlaceStubType[]};

const ContentCarousel: FC<Props> = ({data}) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const WindowDimensions = useWindowDimensions();
  const renderItem = useCallback(
    ({item}) => (
      <View style={styles.container}>
        <Image
          key={item.Id}
          style={globalStyles.flex}
          source={{uri: item.thumbnailUrl}}
        />
      </View>
    ),
    [],
  );
  const pagination = () => {
    return (
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeSlide}
        containerStyle={{
          position: 'absolute',
          alignSelf: 'center',
          bottom: 0,
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };
  return (
    <View style={globalStyles.flex}>
      <RNCarousel<PlaceStubType>
        data={data}
        renderItem={renderItem}
        onSnapToItem={(index) => setActiveSlide(index)}
        layout={'default'}
        sliderWidth={WindowDimensions.width}
        itemWidth={WindowDimensions.width}
      />
      {pagination()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 8},
});

export default ContentCarousel;
