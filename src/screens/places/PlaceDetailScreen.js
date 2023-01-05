import React from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import Title from '../../components/layout/Title';
import PlaceInfo from '../../components/Places/PlaceInfo';
import styles from './styles';
import homeStyles from './styles';

const PlaceDetailScreen = ({route, navigation}) => {
  const {place} = route?.params || {};

  const slicedImage = place?.images?.length ? place?.images?.slice(0, 4) : [];
  const diffImage = place?.images?.length - slicedImage.length;

  const onGalleryPress = () => {
    navigation.navigate('PlaceGallery', {images: place?.images});
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{uri: place?.images[0] || 'https://placeimg.com/640/480/any'}}
        style={styles.imageBackground}
        imageStyle={styles.image}>
        <View style={styles.header}>
          <Pressable hitSlop={8} onPress={() => navigation.goBack()}>
            <Text style={styles.headerIcon}>Back</Text>
          </Pressable>
          <Pressable hitSlop={8} onPress={() => navigation.goBack()}>
            <Text onPress={() => navigation.goBack()} style={styles.headerIcon}>
              Share
            </Text>
          </Pressable>
        </View>

        <Pressable onPress={onGalleryPress} style={styles.footer}>
          {slicedImage.map((img, index) => (
            <View key={index}>
              <Image
                source={{
                  uri: img || 'https://placeimg.com/640/480/any',
                }}
                style={styles.thumbnail}
              />
              {diffImage > 0 && index === slicedImage?.length - 1 ? (
                <View style={styles.moreImageContainer}>
                  <Text style={styles.moreImages}>{`+${diffImage}`}</Text>
                </View>
              ) : null}
            </View>
          ))}
        </Pressable>
      </ImageBackground>
      <View style={styles.headerContainer}>
        <View style={styles.textContainer}>
          <Title style={styles.title} text={place.name} />
          <Text style={styles.city}>{place.city}</Text>
        </View>
        <View>
          <Title style={styles.title} text={place.entry_price} />
        </View>
      </View>

      <PlaceInfo text={place.address} />
      <PlaceInfo
        text={`OPEN - ${place.opening_time} - ${place.closing_time}`}
      />
    </SafeAreaView>
  );
};

export default PlaceDetailScreen;
