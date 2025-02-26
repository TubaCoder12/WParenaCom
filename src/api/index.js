const api = {
    graphql: {
        endpoint: "graphql",
    },
    post: {
        query: {
            getByCategory: "GetPostsByCategory",
            getAllPosts: "GetAllPosts",
            getPopularPosts: "GetPopularPosts",
            getDeals: "GetDeals",
            getFeaturedDeals: "GetFeaturedDeals",
        },
        endpoint: {
            posts: "posts",
            reviews: "reviews",
            latest: "posts",
            deals: "deals",
            services: "services",
        },
    }
}

export default api;