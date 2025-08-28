/*import "./globals.css";
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

        <meta name="google-adsense-account" content="ca-pub-7164455649602046"></meta>

        //  Open Graph *
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content="https://fireprotection.netlify.app/" />
        <meta property="og:type" content="website" />

        // Twitter
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
*/
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata = {
  title: "KC Fire Protection Site",
  description: "Professional Fire Protection Services",
  keywords: "fire safety, fire protection, fire alarms, fire suppression, hydrants, AMC",
  authors: [{ name: "KC Fire Protection" }],
  viewport: "width=device-width, initial-scale=1",
  alternates: { canonical: "https://fireprotection.netlify.app/" },
  verification: {
    google: "oOFGK6zzq9myGlUBaxjnfHfQDESoxi__DDSsU5uidT4",
  },
  openGraph: {
    title: "KC Fire Protection Site",
    description: "Professional Fire Protection Services",
    url: "https://fireprotection.netlify.app/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KC Fire Protection Site",
    description: "Professional Fire Protection Services",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense */}
        <Script async strategy="afterInteractive" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7164455649602046"
     crossorigin="anonymous"></Script>
      </head>
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <main className="container mx-auto p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
