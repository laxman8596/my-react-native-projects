import { StyleSheet, View, Text } from 'react-native';
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';

const Profile = () => {
  return (
    <ThemedView style={styles.container} safe={true}>
      <ThemedText style={styles.heading}>Your Profile</ThemedText>
      <ThemedText>Time to start reading some books...</ThemedText>
    </ThemedView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
});
