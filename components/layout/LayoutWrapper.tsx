'use client';
import { Toaster } from 'react-hot-toast';
import NavBar from './NavBar';
import Footer from './Footer';
export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen w-screen max-w-[100dvw] flex-col items-center overflow-x-clip">
      <Toaster />
      <NavBar />
      {children}
      <Footer />
    </main>
  );
}
