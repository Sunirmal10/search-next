import "./globals.css";
import Footer from '@/components/Footer';

export const metadata = {
  title: "Search Engine App",
  description: "A modern Search Engine based on Google UI using Nextjs 14 and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        {children}
        <Footer/>
        </body>
    </html>
  );
}
