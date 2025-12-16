import { StyleSheet, Text } from 'react-native';
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';
import { Link } from 'expo-router';
import ThemeButton from '../../components/ThemeButton';

// theme components

const Login = () => {
  const handleSubmit = () => {
    console.log('Login Form submitted');
  };
  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Login to your Account
      </ThemedText>
      <ThemeButton onPress={handleSubmit}>
        <ThemedText style={{ color: '#f2f2f2' }}>Login</ThemedText>
      </ThemeButton>
      <Spacer height={100} />
      <Link href="/register">
        <ThemedText style={{ textAlign: 'center' }}>Register instead</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Login;

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
