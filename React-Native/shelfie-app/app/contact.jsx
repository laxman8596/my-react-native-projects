import { Link } from 'expo-router';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Colors } from '../constants/Colors';
import Spacer from '../components/Spacer';
import ThemedText from '../components/ThemedText';
import ThemedView from '../components/ThemedView';

const Contact = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.heading}>Contact page</ThemedText>
      <Spacer height={20} />
      <Link href="/" style={styles.link}>
        <ThemedText>Back to Home page</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'white',
  },
  heading: {
    // color: '#000',
    fontSize: 40,
  },
  link: {
    marginVertical: 30,
    borderBottomWidth: 1,
  },
});
