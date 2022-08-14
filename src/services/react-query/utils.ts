// Packages
import { MutationCache, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { ApiStatusEnums } from '.';

export const reactQueryUtilService = (function () {
  const useInvalidateQuery = () => {
    const queryClient = useQueryClient();
    return (query) => queryClient.invalidateQueries(query);
  };

  const queryDefaultConfig = {
    defaultOptions: {
      queries: {
        /**
         * If a user leaves your application and returns to stale data,
         * React Query automatically requests fresh data for you in the background.
         **/
        refetchOnWindowFocus: false,
        /**
         * React Query will automatically retry the query,
         * if that query's request has not reached the max number of consecutive retries (defaults to 3)
         * or a function is provided to determine if a retry is allowed.
         */
        retry: false,
        staleTime: 30000,
      },
    },
    // configure global cache callbacks to show toast notifications
    mutationCache: new MutationCache({
      onSuccess: (data: any) => {
        toast.success(data.message);
      },
      onError: (error: any) => {
        toast.error(error.message);
      },
    }),
  };


  const isResponseOk = (status: number) =>
    status === ApiStatusEnums.SUCCESS;

  const isErrorResponse = (status: number) =>
    status !== ApiStatusEnums.INTERNAL_SERVER_ERROR;


  return {
    isResponseOk,
    isErrorResponse,
    useInvalidateQuery,
    queryDefaultConfig,
  };
})();