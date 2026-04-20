import { useCallback } from 'react';
import { Platform } from 'react-native';

export function useHaptic() {
  const trigger = useCallback((type: 'light' | 'medium' | 'heavy' = 'light') => {
    // In production, use react-native-haptic-feedback
    // For now, this is a placeholder
    console.log(`Haptic feedback: ${type}`);
  }, []);

  return { trigger };
}