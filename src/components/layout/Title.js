import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Title = ({text = 'Title', style}) => {
  return <Text style={[styles.title, style]}>{text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    color: '#4681A3',
    fontWeight: 'bold',
  },
});

export default Title;
