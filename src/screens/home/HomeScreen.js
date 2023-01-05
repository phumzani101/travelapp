import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import CategoryList from '../../components/categories/CategoryList';
import Title from '../../components/layout/Title';
import AttractionCard from '../../components/Places/AttractionCard';
import homeStyles from './homeStyles';
import placesData from '../../data/places.json';
import categoriesData from '../../data/categories.json';

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [places, setPlaces] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setPlaces(placesData);
    setCategories(categoriesData);

    return () => {
      setPlaces([]);
      setCategories([]);
    };
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setPlaces(placesData);
    } else {
      const filteredPlaces = placesData?.filter(item =>
        item?.categories.includes(selectedCategory),
      );
      setPlaces(filteredPlaces);
    }
  }, [selectedCategory]);

  return (
    <SafeAreaView style={homeStyles.container}>
      <FlatList
        ListHeaderComponent={
          <View>
            <Title text="Travel App" />

            <Title text="Explore" style={homeStyles.subtitle} />
            <CategoryList
              categories={categories}
              selected={selectedCategory}
              onCategoryPress={setSelectedCategory}
            />
          </View>
        }
        ListEmptyComponent={
          <View>
            <Text style={homeStyles.emptyText}>No places found.</Text>
          </View>
        }
        style={homeStyles.list}
        data={places}
        keyExtractor={item => String(item?.id)}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
          <AttractionCard
            place={item}
            key={item.id}
            style={index % 2 === 0 ? homeStyles.attractionCard : {}}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
