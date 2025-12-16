import { StatusBar } from 'react-native';
import { Stack } from 'expo-router';

const Authlayout = () => {
  return (
    <>
      <StatusBar style="auto" />
      <Stack screenOptions={{ headerShown: false, animation: 'none' }} />
    </>
  );
};

export default Authlayout;
