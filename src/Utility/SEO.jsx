const getRankMathSEO = async (url) => {
  const apiURL = `http://localhost/wp-json/rankmath/v1/getHead?url=${encodeURIComponent(url)}`;

  try {
    console.log("Fetching:", apiURL); // Debugging ke liye
    const response = await fetch(apiURL);
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("🚨 Error fetching SEO data:", error);
    return null;
  }
};
