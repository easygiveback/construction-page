import Seo from "../components/seo";
import BackgroundImage from "../components/Image/image-background";
import Layout from "../components/Layout/layout";
import Card from "../components/Card/card";

export default function Home() {
  return (
    <>
      <Seo title="easygiveback.de – Einfach Gutes tun." />
      <Layout>
        <BackgroundImage alt="Hintergrundbild" />
        <Card isImprint={false} />
      </Layout>
    </>
  );
}
