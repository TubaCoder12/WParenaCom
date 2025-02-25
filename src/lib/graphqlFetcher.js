import { gql } from "@apollo/client";
import client from "@/lib/apolloClient";

const fetchGraphQLData = async (queryType, fields, filters = {}) => {
    const filterString = Object.keys(filters).length
        ? `(where: { ${Object.entries(filters)
              .map(([key, value]) => `${key}: "${value}"`)
              .join(", ")} })`
        : "";

    const query = gql`
        {
            ${queryType} ${filterString} {
                nodes {
                    ${fields.join("\n")}
                }
            }
        }
    `;

    try {
        const { data } = await client.query({ query });
        return data[queryType]?.nodes || [];
    } catch (error) {
        console.error("GraphQL Error:", error.message);
        
        if (error.networkError) {
            console.error("Network Error Details:", error.networkError.result || error.networkError.message);
        }

        return null;
    }
};

export default fetchGraphQLData;