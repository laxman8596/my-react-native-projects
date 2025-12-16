import { StyleSheet, View, useColorScheme, Image } from 'react-native';
import { Colors } from '../constants/Colors';

// images
import DarkLogo from '../assets/images/logo_dark.png';
import LightLogo from '../assets/images/logo_light.png';

const ThemedLogo = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  //   const theme = Colors[colorScheme] ?? Colors.light;
  const logo = colorScheme === 'dark' ? DarkLogo : LightLogo;
  return (
    <>
      <Image source={logo} style={style} {...props} />
    </>
  );
};

export default ThemedLogo;

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    padding: 20,
  },
});
