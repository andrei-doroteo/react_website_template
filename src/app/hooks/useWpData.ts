import type { AxiosResponse } from "axios";
import { WpApi } from "../lib/WpApi";
import { useQuery } from "@tanstack/react-query";

/**
 * Custom React hook to send a GET request to a WordPress API
 *
 * @param endpointPath Endpoint path after base endpoint with no leading slash (i.e "pages/4").
 * @param queryKey Array of query key strings (i.e. ["page", "about"]).
 *
 * @returns Resulting data from request.
 */
function useWpData(endpointPath: string, queryKey: string[]): {} | Error {
    const queryFcn = () => {
        return WpApi.get_instance().get_apiClient().get(endpointPath);
    };

    const {
        data,
        error,
        fetchStatus,
        isError,
        isFetched,
        isFetchedAfterMount,
        isFetching,
        isLoading,
        isLoadingError,
        isPaused,
        isPending,
        isPlaceholderData,
        isRefetchError,
        isRefetching,
        isStale,
        isSuccess,
        isEnabled,
        refetch,
        status,
    } = useQuery({
        queryKey: queryKey,
        queryFn: queryFcn,
    });

    return {
        data,
        error,
        fetchStatus,
        isError,
        isFetched,
        isFetchedAfterMount,
        isFetching,
        isLoading,
        isLoadingError,
        isPaused,
        isPending,
        isPlaceholderData,
        isRefetchError,
        isRefetching,
        isStale,
        isSuccess,
        isEnabled,
        refetch,
        status,
    };
}

export { useWpData };
