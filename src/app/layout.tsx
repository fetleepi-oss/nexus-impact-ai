import "./globals.css";

export const metadata = {
  title: "Nexus Impact AI",
  description: "AI Operating System for Impact Organizations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
