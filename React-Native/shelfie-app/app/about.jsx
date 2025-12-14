import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About page</Text>
       <Link href="/contact" style={styles.link}>
        Go To Contact page
      </Link>
      <Link href="/" style={styles.link}>
        Back to Home page
      </Link>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  heading: {
    color: 'white',
    fontSize: 40,
  },
  link: {
    marginVertical: 30,
    borderBottomWidth: 1,
  },
});
