const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
const ELEVENLABS_BASE_URL = 'https://api.elevenlabs.io/v1';

export interface TextToSpeechRequest {
  text: string;
  voiceId?: string;
  modelId?: string;
}

export async function textToSpeech({ text, voiceId = '21m00Tcm4TlvDq8ikWAM', modelId = 'eleven_monolingual_v1' }: TextToSpeechRequest) {
  if (!ELEVENLABS_API_KEY) {
    throw new Error('ELEVENLABS_API_KEY is not configured');
  }

  const response = await fetch(`${ELEVENLABS_BASE_URL}/text-to-speech/${voiceId}`, {
    method: 'POST',
    headers: {
      'Accept': 'audio/mpeg',
      'Content-Type': 'application/json',
      'xi-api-key': ELEVENLABS_API_KEY,
    },
    body: JSON.stringify({
      text,
      model_id: modelId,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to generate speech');
  }

  const audioBlob = await response.blob();
  return URL.createObjectURL(audioBlob);
}

export async function getVoices() {
  if (!ELEVENLABS_API_KEY) {
    throw new Error('ELEVENLABS_API_KEY is not configured');
  }

  const response = await fetch(`${ELEVENLABS_BASE_URL}/voices`, {
    headers: {
      'xi-api-key': ELEVENLABS_API_KEY,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to get voices');
  }

  const data = await response.json();
  return data.voices || [];
}