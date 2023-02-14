import useSWR from "swr";
import { useEffect, useState } from "react";
// import httpService from "../services/httpService";
import { apiErrorMessage } from "../utils/handleAPIErrors";
import toast from "../utils/toast";
import { getUserDetails } from "../services/userService";
import { useLoadingContext } from "../contexts/loadingContext";
import { useLocalStorage } from "./useLocalStorage";

let url = process.env.REACT_APP_BACKEND_BASE_URL + "/users/me";

function useUserData() {
  const { setIsLoading } = useLoadingContext();
  const [authToken] = useLocalStorage("ufd-auth-token", null);
  const initialState = null;
  const [data, setData] = useState(null);
  const fetcher = async (url) => {
    try {
      let response = await getUserDetails();

      response = await response.data;
      let user = response.data;
      return user;
    } catch (error) {
      let message;
      if (error.response) message = apiErrorMessage(error);
      else message = error?.message || error;
      toast.error(message);
    }
  };

  const {
    data: allData,
    error,
    mutate,
  } = useSWR(`${url}`, authToken ? fetcher : null);
  const isLoading = !!authToken && !error && !data;

  useEffect(() => {
    if (allData) setData(allData);
    // console.log(allData);
  }, [allData]);

  return {
    data: data || initialState,
    isLoading: isLoading,
    isEmpty: !data?.data,
    isError: error,
    mutate,
  };
}

export { useUserData };
