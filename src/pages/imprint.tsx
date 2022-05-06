import Layout from "../components/Layout/layout";
import { Container, Row, Col } from "reactstrap";
import BackgroundImage from "../components/Image/image-background";
import Card from "../components/Card/card";

const Imprint = () => {
  return (
    <Layout>
      <BackgroundImage src="/background.png" alt="" />
      <Card isImprint={true} />
    </Layout>
  );
};

export default Imprint;
