import { Noto_Sans_Thai } from 'next/font/google';
import Navigation from './components/Navigation';
import PreHeader from './components/PreHeader';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './globals.css';
import './style.css';

const noto = Noto_Sans_Thai({ subsets: ['latin'] });

export const metadata = {
  title: 'XP Aerospace (Thailand) Co.,Ltd.',
  description: 'Rise Above Comprehensive Aviation Services',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='icon'
          href='./favicon.ico'
          sizes='any'
        />
      </head>
      <body className={noto.className}>
        <Navigation />
        <PreHeader />
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
