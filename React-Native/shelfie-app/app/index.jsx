
import { StyleSheet, Text, View, Image } from 'react-native';
import Logo from '../assets/images/logo_light.png';
import { Link } from 'expo-router';

const index = () => {
  return (
    <View style={styles.container}>
      <Image
        source={Logo}
        style={{ width: 100, height: 100, marginVertical: 20 }}
        resizeMode="contain"
      />
      <Text style={styles.heading}>Hello world</Text>
      <Text style={{ color: 'blue', margin: 30 }}>Reading List App</Text>
      <Link href="/about" style={styles.link}>
        Navigate to About page
      </Link>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  heading: {
    color: 'white',
    fontSize: 40,
  },
  card: {
    height: 300,
    backgroundColor: 'blue',
    padding: 20,
  },
  cardHeading: {
    color: 'white',
  },
  link: {
    marginVertical: 30,
    borderBottomWidth: 1,
  },
});
