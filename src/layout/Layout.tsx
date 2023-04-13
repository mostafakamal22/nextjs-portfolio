import React from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Container } from "./LayoutStyles";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
