import { Inter } from "next/font/google";
import "@/styles/globals.scss";
import { TheHeader } from "@/blocks/TheHeader/TheHeader";
import { TheFooter } from "@/blocks/TheFooter/TheFooter";

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

        <TheFooter />
      </body>
    </html>
  );
}
