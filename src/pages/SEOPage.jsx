import Head from "next/head";

export async function getServerSideProps() {
  try {
    const response = await fetch(
      "https://stg-wparena-staging.kinsta.cloud/wp-json/rankmath/v1/getHead?url=https://stg-wparena-staging.kinsta.cloud/"
    );

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const seoData = await response.json();
console.log(seoData)
    return {
      props: { seoData },
    };
  } catch (error) {
    return {
      props: { seoData: null, error: error.message },
    };
  }
}

const SEOPage = ({ seoData, error }) => {
  if (error) return <p>Error: {error}</p>;

  return (
    <>
    <Head>
     
       {seoData?.head && <head dangerouslySetInnerHTML={{ __html: seoData.head }} />}
    </Head>
  
   
    </>
  );
};

export default SEOPage;
