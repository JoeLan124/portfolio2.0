import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Johannes First Portfolio</title>
        <meta name="description" content="my first website" />
      </Head>
      <h1 className="mt-10 text-gray-300 bg-red-500">Hallo</h1>
    </div>
  );
};

export default Home;
