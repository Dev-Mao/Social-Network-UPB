import "./ui/globals.css"
import { josefinSans } from './fonts'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${josefinSans.variable}`}>
      <body >{children}</body>
    </html>
  );
}