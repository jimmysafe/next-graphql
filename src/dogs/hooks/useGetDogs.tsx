import { useQuery } from "react-query";
import { api, queryClient } from "../../../pages/_app";
import {
  ServerSideProps,
  serverSideProps,
} from "../../helpers/ServerSideProps";

const key = "dogs";
const getDogs = () => api.GetDogs();

const useGetDogs = () => {
  const { data, error, isLoading, isFetching, refetch } = useQuery(
    [key],
    getDogs
  );
  return {
    dogs: data.dogs,
    error,
    loading: isLoading,
    fetching: isFetching,
    refetch,
  };
};

export const prefetchGetDogs = async (): Promise<ServerSideProps> => {
  await queryClient.prefetchQuery(key, getDogs);
  return serverSideProps();
};

export default useGetDogs;
