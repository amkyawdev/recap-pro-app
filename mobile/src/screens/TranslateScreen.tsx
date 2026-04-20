import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'ja', name: 'Japanese' },
];

export default function TranslateScreen() {
  const [sourceText, setSourceText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLang, setTargetLang] = useState('es');
  const [loading, setLoading] = useState(false);

  const handleTranslate = () => {
    if (!sourceText.trim()) return;
    setLoading(true);
    
    // Mock translation
    setTimeout(() => {
      setTranslatedText(`[Translated to ${LANGUAGES.find(l => l.code === targetLang)?.name}] ${sourceText}`);
      setLoading(false);
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Translate</Text>

      <ScrollView style={styles.content}>
        <View style={styles.languageRow}>
          <TouchableOpacity 
            style={styles.languageButton}
            onPress={() => setSourceLang(sourceLang === 'en' ? 'es' : 'en')}
          >
            <Text style={styles.languageText}>
              {LANGUAGES.find(l => l.code === sourceLang)?.name}
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.translateButton}
            onPress={handleTranslate}
            disabled={loading}
          >
            <Text style={styles.translateButtonText}>
              {loading ? '...' : '→'}
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.languageButton}
            onPress={() => setTargetLang(targetLang === 'es' ? 'en' : 'es')}
          >
            <Text style={styles.languageText}>
              {LANGUAGES.find(l => l.code === targetLang)?.name}
            </Text>
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Enter text to translate..."
          value={sourceText}
          onChangeText={setSourceText}
          multiline
        />

        <TextInput
          style={[styles.input, styles.output]}
          placeholder="Translation will appear here..."
          value={translatedText}
          onChangeText={setTranslatedText}
          multiline
          readOnly
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  content: {
    flex: 1,
  },
  languageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  languageButton: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  languageText: {
    fontSize: 14,
    fontWeight: '500',
  },
  translateButton: {
    backgroundColor: '#0ea5e9',
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  translateButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    minHeight: 150,
    marginBottom: 16,
    fontSize: 16,
  },
  output: {
    backgroundColor: '#f0f9ff',
  },
});