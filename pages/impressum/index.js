import Seo from "../../components/seo";
import Layout from "../../components/Layout/layout";
import BackgroundImage from "../../components/Image/image-background";
import Card from "../../components/Card/card";

export default function Imprint() {
  return (
    <>
      <Seo title="easygiveback - Impressum" />
      <Layout>
        <BackgroundImage alt="Hintergrundbild" />
        <Card isimprint={true} />
      </Layout>
    </>
  );
}
