import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

const PlaceGalleryScreen = ({route, navigation}) => {
  const {images} = route?.params || {};

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={item => String(item)}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
          <Image
            key={item}
            source={{uri: item || 'https://placeimg.com/640/480/any'}}
            style={styles.imageGallery}
          />
        )}
      />
      <TouchableOpacity
        style={styles.backContainer}
        onPress={() => navigation.goBack()}>
        <Text style={styles.headerIcon}>Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PlaceGalleryScreen;
