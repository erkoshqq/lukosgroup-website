import "./globals.css";
import Header from "./components/Header";
import SmoothScroll from "./components/SmoothScroll";
import Footer from "./components/Footer";
import CTAConsultation from "./components/CTAConsultation";
import BitrixWidget from './components/BitrixWidget';

export const metadata = {
  title: "Lukos Group",
  description: "Техническое обследование и дефектоскопия",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <SmoothScroll/>
        <BitrixWidget />
        <Header />
          {children}
        <CTAConsultation/>
        <Footer/>
      </body>
    </html>
  );
}
