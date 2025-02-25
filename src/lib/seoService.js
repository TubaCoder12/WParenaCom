import config from '@/config';

export const fetchSEOData = async (currentPath) => {
    try {
        const apiUrl = `${config.RANKMATH_API_URL}?url=${config.BASE_URL}${currentPath}`;

        const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        
        return data;
    } catch (error) {
        console.error("Fetch SEO Data Error:", error.message);
        return null;
    }
};