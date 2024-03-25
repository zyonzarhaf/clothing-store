import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './globals.css';

import { spaceMono } from './fonts';

export const metadata = {
  title: 'Clothing Store',
  description: 'The clothing store official website',
  keywords: ['Clothing store', 'E-commerce platform', 'Fashion products', 'Online shopping', 'Apparel collection', 'Trendy outfits', 'Stylish garments', 'Shopping experience', 'Fashion trends', 'Exclusive deals', 'Seasonal discounts', 'High-quality clothing', 'Fast shipping', 'Secure payments', 'Customer satisfaction'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>
        <header>
          <Navbar />
        </header>
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};
