import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>
      
      <ScrollView style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Welcome to Recap Pro</Text>
          <Text style={styles.cardText}>
            Recap Pro is your ultimate destination for creating and sharing movie recaps.
            Express your thoughts, translate to multiple languages, and listen to text-to-speech.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Features</Text>
          <Text style={styles.cardText}>
            • Create rich movie recaps{'\n'}
            • Multi-language translation{'\n'}
            • Text-to-speech playback{'\n'}
            • Social app-style mobile experience{'\n'}
            • Touch-optimized interactions
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Version</Text>
          <Text style={styles.cardText}>1.0.0</Text>
        </View>
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
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  cardText: {
    color: '#666',
    lineHeight: 24,
  },
});