const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_BASE_URL = 'https://generativelanguage.googleapis.com/v1beta';

export interface GenerateContentRequest {
  prompt: string;
  maxTokens?: number;
  temperature?: number;
}

export async function generateContent({ prompt, maxTokens = 1024, temperature = 0.7 }: GenerateContentRequest) {
  if (!GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY is not configured');
  }

  const response = await fetch(`${GEMINI_BASE_URL}/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        maxOutputTokens: maxTokens,
        temperature,
      },
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to generate content');
  }

  const data = await response.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || '';
}

export async function translateText(text: string, targetLanguage: string): Promise<string> {
  const prompt = `Translate the following text to ${targetLanguage}:\n\n${text}`;
  return generateContent({ prompt });
}

export async function summarizeText(text: string): Promise<string> {
  const prompt = `Summarize the following text:\n\n${text}`;
  return generateContent({ prompt, maxTokens: 512 });
}