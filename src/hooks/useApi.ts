import { useEffect, useState } from "react";

const useApi = (callbackApi: () => Promise<any>, refetch = false) => {
  const [response, setResponse] = useState({});
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchMethod: any = () =>
    callbackApi()
      .then((response) => {
        setResponse(response.data);
        setIsLoading(true);
      })
      .finally(() => {
        setIsLoading(false);
      });

  return [response, fetchMethod, isLoading];
};

export default useApi;
