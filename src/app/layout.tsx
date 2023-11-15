import "~/styles/globals.css";
import Header from "~/components/Layout/Header";
import Footer from "~/components/Layout/Footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Slider Bar",
  description: "The place to drink in Entebbe",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("inter", inter);

  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
