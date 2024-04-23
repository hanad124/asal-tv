import "./globals.css";
import "./assets/css/tailwind.css";
import "./assets/css/materialdesignicons.min.css";
import { Inter, Lexend } from "next/font/google";
import thum from "../../public/images/thum.png";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-lexend",
});

export const metadata = {
  title: "Asal Tv - Watch Movies and TV Shows Exclusively",
  description: "Watch Movies and TV Shows Exclusively on Asal Tv",

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://asal-tv.vercel.app",
    // site_name: "Tabaarak ICT Solutions",
    images: [
      {
        url: thum.src,
        width: 512,
        height: 512,
        alt: "Asal Tv - Watch Movies and TV Shows Exclusively",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="LTR">
      <body
        className={`${inter.variable} ${lexend.variable} font-inter text-base text-slate-950 dark:text-white dark:bg-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
