import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Title = ({text = 'Title'}) => {
  return <Text style={styles.title}>{text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
  },
});

export default Title;
