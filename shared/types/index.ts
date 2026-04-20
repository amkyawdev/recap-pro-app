export interface Movie {
  id: string;
  title: string;
  year: number;
  posterUrl: string;
  backdropUrl?: string;
  overview: string;
  genre: string[];
  rating: number;
  runtime: number;
  director: string;
  cast: string[];
}

export interface Recap {
  id: string;
  movieId: string;
  userId: string;
  title: string;
  content: string;
  images: string[];
  videos: string[];
  createdAt: Date;
  updatedAt: Date;
  likes: number;
  views: number;
  isPublic: boolean;
}

export interface User {
  id: string;
  email: string;
  displayName: string;
  photoURL?: string;
  createdAt: Date;
  role: 'user' | 'admin';
}

export interface Translation {
  id: string;
  recapId: string;
  language: string;
  translatedContent: string;
  createdAt: Date;
}

export interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}