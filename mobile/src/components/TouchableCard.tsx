import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Platform } from 'react-native';
import * as Haptics from 'react-native';

interface TouchableCardProps {
  children: React.ReactNode;
  onPress?: () => void;
  style?: any;
}

export default function TouchableCard({ children, onPress, style }: TouchableCardProps) {
  const handlePress = () => {
    // Haptic feedback would go here in production
    // react-native-haptic-feedback.trigger('impactLight');
    onPress?.();
  };

  return (
    <TouchableOpacity 
      onPress={handlePress}
      activeOpacity={0.7}
      style={[styles.card, style]}
    >
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
});