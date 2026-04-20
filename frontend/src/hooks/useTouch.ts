'use client';

import { useState, useCallback } from 'react';

interface TouchState {
  isPressed: boolean;
  startTime: number;
}

export function useTouch() {
  const [touchState, setTouchState] = useState<TouchState>({
    isPressed: false,
    startTime: 0,
  });

  const handleTouchStart = useCallback(() => {
    setTouchState({ isPressed: true, startTime: Date.now() });
  }, []);

  const handleTouchEnd = useCallback(() => {
    setTouchState({ isPressed: false, startTime: 0 });
  }, []);

  const getTouchDuration = useCallback(() => {
    return Date.now() - touchState.startTime;
  }, [touchState.startTime]);

  return {
    isPressed: touchState.isPressed,
    handleTouchStart,
    handleTouchEnd,
    getTouchDuration,
  };
}