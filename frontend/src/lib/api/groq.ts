const GROQ_API_KEY = process.env.GROQ_API_KEY;
const GROQ_BASE_URL = 'https://api.groq.com/openai/v1';

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export async function chat(messages: ChatMessage[], model = 'mixtral-8x7b-32768') {
  if (!GROQ_API_KEY) {
    throw new Error('GROQ_API_KEY is not configured');
  }

  const response = await fetch(`${GROQ_BASE_URL}/chat/completions`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${GROQ_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      messages,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to get chat completion');
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content || '';
}

export async function generateRecap(movieTitle: string, plotSummary: string): Promise<string> {
  const messages: ChatMessage[] = [
    {
      role: 'system',
      content: 'You are a creative writer specialized in movie recaps. Write engaging, concise recaps.',
    },
    {
      role: 'user',
      content: `Write a recap for "${movieTitle}". Plot: ${plotSummary}`,
    },
  ];

  return chat(messages);
}