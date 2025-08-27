import "../styles/globals.css";

export const metadata = {
  title: "KC Fire Protection System",
  description: "Fire Protection Systems & Services – Alarms, Suppression, Hydrants, AMC",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
