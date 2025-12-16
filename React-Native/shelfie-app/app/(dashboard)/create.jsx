import { StyleSheet, View, Text } from 'react-native';
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
const Create = () => {
  return (
    <ThemedView style={styles.container} safe={true}>
      <ThemedText style={styles.title}>Create Page</ThemedText>
      <ThemedText>Add new books to your collection</ThemedText>
    </ThemedView>
  );
};

export default Create;

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