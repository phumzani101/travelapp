import React from 'react';
import {
  // Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const PlaceInfo = ({text, style = {}}) => {
  return (
    <View style={[styles.card, style]}>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 12,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 4,
  },
});

export default PlaceInfo;
