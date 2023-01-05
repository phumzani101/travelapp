import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Title from '../../components/layout/title';
import homeStyles from './homeStyles';

const HomeScreen = () => {
  return (
    <SafeAreaView style={homeStyles.container}>
      <View>
        <Title text="Home Screen" />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
