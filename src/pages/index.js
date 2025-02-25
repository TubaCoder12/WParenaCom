import fetchGraphQLData from '@/lib/graphqlFetcher';
import { fetchSEOData } from "@/lib/seoService";
import FeaturedPost from "@/Component/FeaturedPost";
import PostList from "@/Component/PostList";
import CategoryList from "@/Component/CategoryList";
import PopularPosts from "@/Component/PopularPosts";
import Routes from "./Routes";
import HostingQuiz from "./HostingQuiz";
import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

export async function getStaticProps() {
  try {
    const categories = await fetchGraphQLData("posts", [
      "id",
      "slug",
      "title",
      "date",
      "excerpt",
      "featuredImage { node { sourceUrl altText } }",
      "author { node { name } }"
    ], { categoryId: 9 });
    
    const newsPosts = await fetchGraphQLData("posts", [
      "id",
      "slug",
      "title",
      "date",
      "excerpt",
      "featuredImage { node { sourceUrl altText } }",
      "author { node { name } }"
    ], { categoryId: 990 });

    const latestPosts = await fetchGraphQLData("posts", [
      "id",
      "slug",
      "title",
      "date",
      "excerpt",
      "featuredImage { node { sourceUrl altText } }",
      "author { node { name } }"
    ]);

    const featuredPost = await fetchGraphQLData("deals", [
      "id",
      "title",
      "content",
      "date",
      "featuredImage { node { sourceUrl } }",
      "acf"
    ]);

    const popularPosts = await fetchGraphQLData("services", [
      "id",
      "title",
      "content",
      "date",
      "slug",
      "featuredImage { node { sourceUrl } }",
      "acf"
    ]);

    return {
      props: {
        categories: categories || [],
        featuredPost: featuredPost || [],
        popularPosts: popularPosts || [],
        NewsPosts: newsPosts || [],
        LatestPost: latestPosts || [],
      },
      revalidate: 60, // ISR every 60 seconds
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        categories: [],
        featuredPost: [],
        popularPosts: [],
        NewsPosts: [],
        LatestPost: [],
      }
    };
  }
}

export default function Home({ categories, featuredPost, popularPosts, NewsPosts, LatestPost }) {
  const [activeRoute, setActiveRoute] = useState("Latest");
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
        <title>{pageTitle || "WPArena: Ultimate WordPress Resources - Since 2008"}</title>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet" />

        {metaTags.map((tag, index) => {
          const TagName = tag.tagName.toLowerCase();
          return <TagName key={index} {...Object.fromEntries(Array.from(tag.attributes).map(attr => [attr.name, attr.value]))} />;
        })}
      </Head>

      <PostList />
      <Routes onRouteClick={setActiveRoute} />
      {activeRoute === "Reviews" && <CategoryList categories={categories} />}
      {activeRoute === "News" && <CategoryList categories={NewsPosts} />}
      {activeRoute === "Latest" && <CategoryList categories={LatestPost} />}
      <HostingQuiz />
      <PopularPosts services={popularPosts} />
      <FeaturedPost posts={featuredPost} />
    </>
  );
}