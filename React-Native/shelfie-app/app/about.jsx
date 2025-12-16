import { Link } from 'expo-router';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';

const About = () => {
  const colorScheme = useColorScheme();
  // console.log(colorScheme);
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.heading} title={true}>
        About page
      </ThemedText>
      <Link href="/contact" style={styles.link}>
        <ThemedText>Go To Contact page</ThemedText>
      </Link>
      <Link href="/" style={styles.link}>
        <ThemedText>Back to Home page</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'white',
  },
  heading: {
    // color: 'white',
    fontSize: 40,
  },
  link: {
    marginVertical: 30,
    borderBottomWidth: 1,
  },
});
