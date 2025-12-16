import { StyleSheet, View, Text } from 'react-native';
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
const Books = () => {
  return (
    <ThemedView style={styles.container} safe={true}>
      <ThemedText style={styles.title}>Books Page</ThemedText>
      <ThemedText>Your book collection will appear here</ThemedText>
    </ThemedView>
  );
};

export default Books;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
