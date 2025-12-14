import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contact page</Text>
      <Link href="/" style={styles.link}>
        Back to Home page
      </Link>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
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
