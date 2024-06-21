import { Montserrat } from 'next/font/google';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './globals.css';
import './style.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'XP Aerospace',
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
      <body className={montserrat.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
