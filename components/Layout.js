import "../styles/globals.css";

export const metadata = {
  title: "KC Fire Protection System",
  description: "Fire Protection Systems & Services – Alarms, Suppression, Hydrants, AMC",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Fire safety services, equipment, and support in India." />
        <meta name="keywords" content="fire safety, fire protection, KC Fire Protection, fire alarms, fire suppression, hydrants, AMC" />
        <meta name="author" content="KC Fire Protection" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://fireprotection.netlify.app/" />
        <title>KC Fire Protection</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
