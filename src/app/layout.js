import { Inter } from "next/font/google";
import "@/styles/globals.scss";
import { TheHeader } from "@/blocks/TheHeader/TheHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecosolution",
  description: "Renewable energy for any task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TheHeader />

        <main>{children}</main>

        <footer>TheFooter</footer>
      </body>
    </html>
  );
}
