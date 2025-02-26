import fetchGraphQLData from '@/lib/graphqlFetcher';

export async function fetchPosts(method, categoryName, queryType = "posts", includeAcf = false) {
    const fields = [
        "id",
        "slug",
        "title",
        "date",
        "excerpt",
        "featuredImage { node { sourceUrl altText } }",
    ];

    if (queryType === "posts") {
        fields.push("author { node { name } }");
    }

    if (includeAcf) {
        fields.push("acf");
    }

    return await fetchGraphQLData(method, queryType, fields, categoryName);
}
