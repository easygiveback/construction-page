import Head from "next/head";

export default function Seo({ title }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta
          name="description"
          content="Die Spendenseite easygiveback.de ist eine Plattform, über die man einfach und effizient Geld an Wohltätigkeitsorganisationen oder gemeinnützige Vereine spenden kann."
        />
        <meta
          name="keywords"
          content="easygiveback, gutes tun, spendenseite, einfach spenden, spenden gemeinnütziger verein, hochschule der medien, hdm"
        />
        <link
          rel="icon"
          href="../public/cropped-Favicon_blau-1-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="../public/cropped-Favicon_blau-1-192x192.png"
          sizes="192x192"
        />
        <link
          rel="apple-touch-icon"
          href="../public/cropped-Favicon_blau-1-180x180.png"
        />
        <meta
          name="msapplication-TileImage"
          content="../public/cropped-Favicon_blau-1-270x270.png"
        />
      </Head>
    </>
  );
}