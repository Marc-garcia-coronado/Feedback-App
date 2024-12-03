import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import SiteNav from "@/app/components/siteNav";
import {ThemeProvider} from "@/app/components/themeProvider";
import SiteFooter from "@/app/components/SiteFooter";

export const metadata = {
  title: "360 Feedback App",
  description: "360 Feedback App by Publicis LePont",
  icons: {
    icon: "/kindred-logo.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="flex flex-col">
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteNav />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
