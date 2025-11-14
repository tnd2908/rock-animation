import "./globals.css";

import { Epilogue, Fahkwang, Manrope, Space_Grotesk } from "next/font/google";

const epilogue = Epilogue({
    variable: "--font-epilogue",
    subsets: ["latin"],
    display: "swap",
});

const spaceGrotesk = Space_Grotesk({
    variable: "--font-spaceGrotesk",
    subsets: ["latin"],
    display: "swap",
});

const manrope = Manrope({
    variable: "--font-manrope",
    subsets: ["latin"],
    display: "swap",
});

const fahkwang = Fahkwang({
    variable: "--font-fahkwang",
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "600"]
})
export { epilogue, fahkwang, manrope, spaceGrotesk };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${fahkwang.variable} antialiased`}
        >
        {children}
      </body>
    </html>
  );
}
