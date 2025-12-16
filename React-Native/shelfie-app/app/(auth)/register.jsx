import { StyleSheet, Text } from 'react-native';
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';
import { Link } from 'expo-router';
import ThemeButton from '../../components/ThemeButton';

// theme components

const Register = () => {
  const handleSubmit = () => {
    console.log('Register Form submitted');
  };

  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Register for an Account
      </ThemedText>
      <ThemeButton onPress={handleSubmit}>
        <Text style={{ color: '#f2f2f2' }}>Register</Text>
      </ThemeButton>
      <Spacer height={100} />
      <Link href="/login">
        <ThemedText style={{ textAlign: 'center' }}>Login instead</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 30,
  },
});
