import "./globals.css";

export const metadata = {
  title: "Hustlin Hardos",
  description: "BREAKING NEWS: Hustlin Hardos set to launch the most anticipated NFT project of 2022",
  openGraph: {
    title: "Hustlin Hardos",
    description: "BREAKING NEWS: Hustlin Hardos set to launch the most anticipated NFT project of 2022 ",
    images: [
      {
        url: "/ meta-tag.png",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased bg-[url('/assets/images/webp/bg.webp')] bg-cover `} 
      >
        {children}
      </body>
    </html>
  );
}
