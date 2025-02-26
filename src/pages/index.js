import { fetchPosts } from '@/lib/fetchPosts';
import FeaturedPost from "@/Component/FeaturedPost";
import PostList from "@/Component/PostList";
import CategoryList from "@/Component/CategoryList";
import PopularPosts from "@/Component/PopularPosts";
import Routes from "./Routes";
import HostingQuiz from "./HostingQuiz";
import { useState } from "react";

export async function getStaticProps() {
  try {
    const [
      categories,
      newsPosts,
      latestPosts,
      featuredDeals,
      popularServices
    ] = await Promise.all([
      fetchPosts("GetPostsByCategory", "reviews", "posts"),
      fetchPosts("GetPostsByCategory", "news", "posts"),
      fetchPosts("GetAllPosts", null, "posts"),
      fetchPosts("GetDeals", null, "deals", true),
      fetchPosts("GetPopularPosts", null, "services", true),
    ]);

    return {
      props: {
        categories,
        newsPosts,
        latestPosts,
        featuredDeals,
        popularServices,
      },
      revalidate: 60, // ✅ ISR every 60 seconds
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        categories: [],
        newsPosts: [],
        latestPosts: [],
        featuredDeals: [],
        popularServices: [],
      },
    };
  }
}

export default function Home({ categories, featuredDeals, popularServices, newsPosts, latestPosts }) {
  const [activeRoute, setActiveRoute] = useState("Latest");

  return (
    <>
      <PostList />
      <Routes onRouteClick={setActiveRoute} />
      {activeRoute === "Reviews" && <CategoryList categories={categories} />}
      {activeRoute === "News" && <CategoryList categories={newsPosts} />}
      {activeRoute === "Latest" && <CategoryList categories={latestPosts} />}
      <HostingQuiz />
      <PopularPosts services={featuredDeals} />
      <FeaturedPost posts={popularServices} />
    </>
  );
}