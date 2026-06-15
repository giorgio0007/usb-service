import type { Metadata } from 'next';
import { Inter, Russo_One } from 'next/font/google';
import { ChatWidget } from '@/widgets/chat-widget/ui/ChatWidget';
import { Footer } from '@/widgets/footer/ui/Footer';
import { Header } from '@/widgets/header/ui/Header';
import { siteConfig } from '@/shared/config/site';
import { themeInitScript } from '@/shared/lib/theme';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'cyrillic'],
});

const russoOne = Russo_One({
  variable: '--font-russo',
  subsets: ['cyrillic', 'latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${russoOne.variable} h-full scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground antialiased transition-colors duration-200">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
