import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';

const CategoryList = ({categories = [], selected, onCategoryPress}) => {
  return (
    <FlatList
      horizontal
      data={categories}
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => String(item)}
      renderItem={({item, index}) => {
        const selectedItem = selected === item;
        return (
          <TouchableOpacity
            onPress={() => onCategoryPress(item)}
            style={[
              styles.container,
              selectedItem ? styles.selectedContainer : {},
            ]}
            key={index}>
            <Text
              style={[styles.item, selectedItem ? styles.selected : {}]}
              key={index}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 14,
    marginRight: 17,
  },
  item: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.5)',

    paddingVertical: 2,
  },
  selected: {
    color: 'black',
    fontWeight: 'bold',
  },
  selectedContainer: {
    borderBottomColor: '#4681A3',
    borderBottomWidth: 1,
  },
});

export default CategoryList;
