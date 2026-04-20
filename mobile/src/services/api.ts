const API_BASE_URL = 'http://localhost:8000';

async function request(endpoint: string, options: RequestInit = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  return response.json();
}

export const api = {
  // Auth
  login: (email: string, password: string) =>
    request('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),

  register: (email: string, password: string, displayName: string) =>
    request('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password, displayName }),
    }),

  // Movies
  getMovies: () => request('/api/movies/'),
  getMovie: (id: string) => request(`/api/movies/${id}`),

  // Recaps
  getRecaps: () => request('/api/recaps/'),
  getRecap: (id: string) => request(`/api/recaps/${id}`),
  createRecap: (data: any) =>
    request('/api/recaps/', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  updateRecap: (id: string, data: any) =>
    request(`/api/recaps/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
  deleteRecap: (id: string) =>
    request(`/api/recaps/${id}`, { method: 'DELETE' }),

  // Translation
  translate: (text: string, source: string, target: string) =>
    request('/api/translate/', {
      method: 'POST',
      body: JSON.stringify({ text, source_language: source, target_language: target }),
    }),
};