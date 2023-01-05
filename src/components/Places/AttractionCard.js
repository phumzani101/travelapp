import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const {width} = Dimensions.get('window');

const AttractionCard = ({place, style = {}, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, style]}>
      <Image
        source={{uri: place?.images[0] || 'https://placeimg.com/640/480/any'}}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{place?.name}</Text>
        <Text style={styles.city}>{place?.city}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 4,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 15,
    marginBottom: 12,
  },
  image: {
    width: (width - 96) / 2,
    height: 120,
    borderRadius: 15,
  },
  title: {
    color: 'black',
    fontWeight: '500',
    fontSize: 12,
  },
  city: {
    fontWeight: '400',
    fontSize: 10,
    color: 'rgba(0, 0, 0, 0.7)',
  },
  content: {
    padding: 12,
  },
  icon: {
    width: 10,
    height: 10,
    marginRight: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default AttractionCard;
