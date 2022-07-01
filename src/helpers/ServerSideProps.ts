import { dehydrate, DehydratedState } from "react-query";
import { queryClient } from "../../pages/_app";

export type ServerSideProps = {
  props: {
    dehydratedState: DehydratedState;
  };
};

export const serverSideProps = (): ServerSideProps => {
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
