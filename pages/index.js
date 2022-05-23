import Seo from "../components/seo";
import BackgroundImage from "../components/Image/image-background";
import Layout from "../components/Layout/layout";
import Card from "../components/Card/card";

export default function Home() {
  return (
    <>
      <Seo title="easygiveback – Einfach Gutes tun." />
      <Layout>
        <BackgroundImage src="/background.webp" alt="Hintergrundbild" />
        <Card isImprint={false} />
      </Layout>
    </>
  );
}
