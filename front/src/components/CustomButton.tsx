import React from 'react';
import {Pressable, PressableProps, Text, StyleSheet} from 'react-native';

interface CustomButtonProps extends PressableProps {
  label: string;
  variant?: 'filed' | 'outlined';
  size?: 'large' | 'medium';
}

function CustomButton({
  label,
  variant = 'filed',
  size = 'large',
  ...props
}: CustomButtonProps) {
  return (
    <Pressable
      {...props}
      style={[styles.container, styles[variant], styles[size]]}>
      <Text style={[styles.text, styles[`${variant}Text`]]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    justifyContent: 'center',
  },
  filled: {
    backgroundColor: '#C63B64',
  },
  outlined: {
    borderColor: '#C63B64',
    borderWidth: 1,
  },
  large: {
    width: '100%',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  medium: {
    width: '50%',
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
  },
  filledText: {
    color: 'white',
  },

  outlinedText: {
    color: '#C63B64',
  },
});

export default CustomButton;
