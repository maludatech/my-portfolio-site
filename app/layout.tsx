import { Poppins } from "next/font/google";
import { ClientThemeProvider } from "@/components/ClientThemeProvider";
import "./globals.css";
import { APP_DESCRIPTION, APP_NAME, APP_SLOGAN } from "@/lib/constants";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: `${APP_NAME} | ${APP_SLOGAN}`,
  },
  description: APP_DESCRIPTION,
};

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ClientThemeProvider>
          <Navbar />
          {children}
        </ClientThemeProvider>
      </body>
    </html>
  );
}
