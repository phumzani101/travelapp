import {Dimensions, StyleSheet} from 'react-native';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {margin: 24, flex: 1},
  imageBackground: {
    width: '100%',
    height: height / 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    borderRadius: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  headerIcon: {
    backgroundColor: 'white',
    color: 'black',
    padding: 5,
    borderRadius: 10,
    margin: 8,
  },

  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    margin: 16,
    paddingHorizontal: 10,
  },
  thumbnail: {
    width: 40,
    height: 40,
    margin: 4,
    borderRadius: 10,
  },
  moreImages: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  moreImageContainer: {
    position: 'absolute',
    width: 40,
    height: 40,
    top: 4,
    left: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    marginVertical: 40,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {color: '#000'},
  city: {
    fontSize: 20,
    fontWeight: '400',
    marginTop: 8,
  },
  price: {},
  imageGallery: {
    width: '100%',
    height: 400,
    borderRadius: 20,
    marginBottom: 20,
  },
  backContainer: {
    position: 'absolute',
    top: 10,
  },
});

export default styles;
