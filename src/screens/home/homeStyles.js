import {StyleSheet} from 'react-native';

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 24,
  },
  list: {
    flex: 1,
    alignContent: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: 24,
    fontWeight: 'normal',
  },
  subtitle: {
    fontSize: 16,
    color: 'black',
    marginTop: 4,
    marginBottom: 16,
  },
  attractionCard: {marginRight: 16},
  emptyText: {
    textAlign: 'center',
    marginTop: 24,
    fontSize: 16,
  },
});

export default homeStyles;
