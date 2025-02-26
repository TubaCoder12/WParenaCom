import "@/styles/globals.css";
import Navbar2 from "./Navbar2";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { fetchSEOData } from "@/lib/seoService";

export default function App({ Component, pageProps }) {
  const [metaTags, setMetaTags] = useState([]);
  const [pageTitle, setPageTitle] = useState("WPArena: Ultimate WordPress Resources - Since 2008");
  const [seoData, setSeoData] = useState(null);
  
  const router = useRouter();

  useEffect(() => {
    async function updateSEOData() {
      const currentPath = router.asPath;
      
      const seoResponse = await fetchSEOData(currentPath);
      setSeoData(seoResponse);
    }

    updateSEOData();
  }, [router.asPath]);

  useEffect(() => {
    if (seoData?.head) {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = seoData.head;

      const extractedTags = Array.from(tempDiv.children).filter(
        (el) => el.tagName === "META" || el.tagName === "LINK" || el.tagName === "SCRIPT"
      );

      setMetaTags(extractedTags);

      const ogTitleTag = extractedTags.find((tag) => tag.getAttribute("property") === "og:title");

      if (ogTitleTag) {
        setPageTitle(ogTitleTag.getAttribute("content"));
      }
    }
  }, [seoData]);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
        {metaTags.map((tag, index) => {
          const TagName = tag.tagName.toLowerCase();
          return (
            <TagName
              key={index}
              {...Object.fromEntries(Array.from(tag.attributes).map(attr => [attr.name, attr.value]))}
            />
          );
        })}
      </Head>

      <Navbar />
      <Navbar2 />
      <Component {...pageProps} />
    </>
  );
}