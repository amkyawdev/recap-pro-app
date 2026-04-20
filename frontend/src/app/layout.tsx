import type { Metadata } from 'next';
import './styles/globals.css';
import './styles/touch.css';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';

export const metadata: Metadata = {
  title: 'Recap Pro',
  description: 'Create and share movie recaps',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}