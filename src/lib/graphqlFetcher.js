import { gql } from "@apollo/client";
import client from "@/lib/apolloClient";

const fetchGraphQLData = async (method, queryType, fields, categoryName = null) => {
    const validQueryTypes = ["posts", "deals", "services"];
    if (!validQueryTypes.includes(queryType)) {
        console.error(`Invalid queryType: "${queryType}". Expected one of ${validQueryTypes.join(", ")}`);
        return [];
    }

    const hasCategory = typeof categoryName == "string";

    const query = gql`
        query ${method} ${hasCategory ? "($categoryName: String!)" : ""} {
            ${queryType} ${hasCategory ? "(where: { categoryName: $categoryName })" : ""} {
                nodes {
                    ${fields.join("\n")}
                }
            }
        }
    `;

    try {
        const { data } = await client.query({
            query,
            ...(hasCategory ? { variables: { categoryName } } : {}),
        });
        
        return data[queryType]?.nodes || [];
    } catch (error) {
        console.error(`GraphQL Error in ${queryType}:`, error.message);
        if (error.networkError) {
            console.error("Network Error Details:", error.networkError.result || error.networkError.message);
        }
        return [];
    }
};

export default fetchGraphQLData;