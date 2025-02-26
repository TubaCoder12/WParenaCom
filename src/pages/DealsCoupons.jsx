import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gql } from "@apollo/client";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import client from "@/lib/apolloClient";


// ✅ GraphQL Query
export const GET_POSTS_BY_CATEGORY = gql`
  query GetDeals {
    deals {
      nodes {
        id
        title
        content
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
        acf
      }
    }
  }
`;


// ✅ Timeline Component
const Timeline = ({ posts }) => {
  const [visibleBlogs, setVisibleBlogs] = useState(5);
  const loadMoreBlogs = () => setVisibleBlogs((prev) => prev + 3);
  const visiblePosts = posts.slice(0, visibleBlogs);

  return (
    <div className="py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold">WPArena Coupons and Deals</h1>
            <p className="text-gray-600 mt-4 max-w-6xl mx-auto leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
    
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-10">
            {posts.map((post) => {
              const acfData = post.acf ? JSON.parse(post.acf) : {}; // JSON Parse
    
              return (
                <div
                  key={post.id}
                  className="bg-white border rounded-lg py-3  px-4 flex items-center space-x-4"
                >
                  {/* Image */}
                  <div className="border rounded-full flex items-center p-3">
      <div className="w-14 h-14 overflow-hidden rounded-full">
        <Image
          src={post.featuredImage?.node?.sourceUrl || "/fallback-image.jpg"}
          alt={post.title}
          width={54}
          height={54}
          className="object-cover w-full h-full rounded-full"
        />
      </div>
    </div>
    
                  <div className="text-gray-300 border-l-2 text-3xl h-20 pr-4"></div>
    
                  {/* Title & Discount */}
                  <div>
                    <h3 className="text-[18px] font-semibold text-[#161a3a] pr-4  ">{post.title}</h3>
    
                    {/* Discount Display */}
                    {acfData.coupons_discount && (
                      <p className="mt-1  text-[#629eca] font-[500] ">
                        {acfData.coupons_discount}% OFF
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
    
          {/* View All Button */}
          {posts.length === 17 && (
            <div className="text-center mt-10">
              <button className="px-8 py-3 bg-black text-white rounded shadow hover:bg-gray-700 transition">
                View All
              </button>
            </div>
          )}
        </div>
  );
};

// ✅ getStaticProps
export async function getStaticProps() {
  try {
    const { data } = await client.query({
      query: GET_POSTS_BY_CATEGORY, // ✅ Query theek hai
    });

    return {
      props: {
        posts: data.deals.nodes || [], // ✅ Yahan pe 'deals' use karein, 'posts' nahi
      },
      revalidate: 86400, // ✅ Revalidate after 24 hours
    };
  } catch (error) {
    console.error("Error fetching posts:", error);
    return {
      props: {
        posts: [],
      },
    };
  }
}


// ✅ Page Component
export default function Page({ posts }) {
  return <Timeline posts={posts} />;
}
