import Head from "next/head";
import cropped32 from "../public/cropped-Favicon_blau-1-32x32.png"
import cropped192 from "../public/cropped-Favicon_blau-1-192x192.png"
import cropped180 from "../public/cropped-Favicon_blau-1-180x180.png"
import cropped270 from "../public/cropped-Favicon_blau-1-270x270.png"

export default function Seo({ title }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta name="theme-color" content="#223C48" />
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
          href={cropped32}
          sizes="32x32"
        />
        <link
          rel="icon"
          href={cropped192}
          sizes="192x192"
        />
        <link
          rel="apple-touch-icon"
          href={cropped180}
        />
        <meta
          name="msapplication-TileImage"
          content={cropped270}
        />
      </Head>
    </>
  );
}
