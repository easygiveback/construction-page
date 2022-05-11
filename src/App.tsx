import react from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/layout";
import BackgroundImage from "./components/Image/image-background";
import Card from "./components/Card/card";
// Import pages
import Imprint from "./pages/imprint";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <BackgroundImage src="/background.png" alt="" />
                <Card isImprint={false} />
              </Layout>
            }
          />
          <Route path="/impressum" element={<Imprint />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
