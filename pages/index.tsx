import type { NextPage } from "next";
import useGetDogs, { prefetchGetDogs } from "../src/dogs/hooks/useGetDogs";

const Home: NextPage = () => {
  const { dogs, error, loading, fetching } = useGetDogs();
  console.log("Fetching: ", fetching);
  console.log("Loading: ", loading);
  return <div>hello</div>;
};

export async function getServerSideProps() {
  return prefetchGetDogs();
}

export default Home;
