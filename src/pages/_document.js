import { Html, Head, Main, NextScript } from "next/document";
import Footer from "./Footer";
import Patners from "./Patner";

export default function Document() {
  
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
        <Patners/>
        <Footer/>
      </body>
    </Html>
  );
}
