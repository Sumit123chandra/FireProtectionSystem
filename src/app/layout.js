import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

export const metadata = {
  title: "KC Fire Protection Site",
  description: "Professional Fire Protection Services",
  verification: {
    google: "oOFGK6zzq9myGlUBaxjnfHfQDESoxi__DDSsU5uidT4",
  },
};

export default function RootLayout({ children }) {   
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="fire safety, fire protection, fire alarms, fire suppression, hydrants, AMC" />
        <meta name="author" content="KC Fire Protection" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://fireprotection.netlify.app/" />

        <meta name="google-site-verification" content="oOFGK6zzq9myGlUBaxjnfHfQDESoxi__DDSsU5uidT4" />

        {/* Open Graph */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content="https://fireprotection.netlify.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
      </Head>

      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <main className="container mx-auto p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
