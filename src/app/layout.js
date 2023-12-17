import { Fira_Sans } from "next/font/google";
import "./globals.scss";
import { TheHeader } from "@/blocks/TheHeader/TheHeader";
import { TheFooter } from "@/blocks/TheFooter/TheFooter";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

export const metadata = {
  title: "Ecosolution",
  description: "Renewable energy for any task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={firaSans.className}>
        <TheHeader />

        <main>{children}</main>

        <TheFooter />
      </body>
    </html>
  );
}
