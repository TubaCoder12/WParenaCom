import api from "@/api";
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
      fetchPosts(api.post.query.getByCategory, api.post.endpoint.reviews, api.post.endpoint.posts),
      fetchPosts(api.post.query.getByCategory, "news", api.post.endpoint.posts),
      fetchPosts(api.post.query.getAllPosts, null, api.post.endpoint.latest),
      fetchPosts(api.post.query.getDeals, null, api.post.endpoint.deals, true),
      fetchPosts(api.post.query.getPopularPosts, null, api.post.endpoint.services, true),
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
      <PopularPosts services={popularServices} />
      <FeaturedPost posts={featuredDeals} />
    </>
  );
}