import Header from './components/Header';
import About from './components/About';
import Features from './components/Features';
import Mission from './components/Mission';
import Process from './components/Process';

export default function Home() {
  return (
    <main>
      <Header />
      <main>
        <About />
        <Features />
        <Process />
        <Mission />
      </main>
    </main>
  );
}
