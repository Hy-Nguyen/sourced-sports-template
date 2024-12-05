'use client';
import { Toaster } from 'react-hot-toast';
import NavBar from './NavBar';
import Footer from './Footer';
export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="flex min-h-screen max-w-[100dvw] flex-col items-center">
        <Toaster />
        <NavBar />
        {children}
        <Footer />
      </main>
    </>
  );
}
