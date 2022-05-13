import { FC } from "react";
import Footer from "../Footer/footer";
import styles from "./layout.module.scss";
import Header from "../Header/header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.layout}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
