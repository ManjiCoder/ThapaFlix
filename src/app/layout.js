import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Mulish } from "next/font/google";

const mulish = Mulish({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "ThapaFlix",
  description:
    "ThapaFlix is a webapp here you can get all movie/show detail like NetFlix",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
