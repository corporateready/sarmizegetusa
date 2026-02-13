import "./globals.css";
import Script from "next/script";
import GoogleTagManager from "./components/GoogleTagManager"

export const metadata = {
  title: "Un nou ansamblu rezidențial în inima sectorului Botanica",
  description: "Start vânzări: un proiect rezidențial amplu, amplasat într-o locație fără precedent, lângă 2 parcuri mari și 2 scuaruri verzi. Apartamente moderne, școală, grădiniță și parcări subterane.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  const GTM_ID = "GTM-N59S3XBQ";
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5"/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <meta name="robots" content="index, follow" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon_io/android-chrome-512x512.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon_io/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_io/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        {/* <GoogleTagManager gtmId={GTM_ID} />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
            <iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
                    height="0" 
                    width="0" 
                    style="display:none;visibility:hidden">
            </iframe>
            `,
          }}
        /> */}
      </head>
      <body className={`bg-[#060916] antialiased`}>
        {children}
        <Script
          id="to-top"
          dangerouslySetInnerHTML={{
            __html: `history.scrollRestoration = "manual"`,
          }}
        />
      </body>
    </html>
  );
}
