import { useAuth as useNextAuth } from 'next-auth/react';

export function useAuth() {
  const { data: session, status } = useNextAuth();
  
  return {
    user: session?.user,
    loading: status === 'loading',
    error: null,
  };
}