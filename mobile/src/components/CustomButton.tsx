import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  loading?: boolean;
  disabled?: boolean;
  style?: any;
}

export default function CustomButton({ 
  title, 
  onPress, 
  variant = 'primary', 
  loading = false,
  disabled = false,
  style 
}: CustomButtonProps) {
  const variants = {
    primary: { backgroundColor: '#0ea5e9', color: '#fff' },
    secondary: { backgroundColor: '#e5e7eb', color: '#374151' },
    outline: { backgroundColor: 'transparent', color: '#0ea5e9', borderWidth: 2, borderColor: '#0ea5e9' },
  };

  const v = variants[variant];

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles.button,
        { backgroundColor: v.backgroundColor },
        v.borderWidth && { borderWidth: v.borderWidth, borderColor: v.borderColor },
        (disabled || loading) && styles.disabled,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={v.color} />
      ) : (
        <Text style={[styles.text, { color: v.color }]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  disabled: {
    opacity: 0.5,
  },
});