import { Pressable, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

const ThemeButton = ({ style, onPress, ...props }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.btn, pressed && styles.pressed, style]}
      {...props}
    />
  );
};

export default ThemeButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
  },
  pressed: {
    opacity: 0.8,
  },
});
