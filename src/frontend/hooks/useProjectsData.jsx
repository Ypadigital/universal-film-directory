import useSWR from "swr";
import { useEffect, useState } from "react";
// import httpService from "../services/httpService";
import { apiErrorMessage } from "../utils/handleAPIErrors";
import toast from "../utils/toast";
import { getAuthToken } from "../utils/helpers";
import { getUserJobs } from "../services/userService";

let url = process.env.REACT_APP_BACKEND_BASE_URL + "/users/jobs";

function useProjectsData() {
  const authToken = getAuthToken();
  const initialState = [];
  const [data, setData] = useState(null);

  const fetcher = async (url) => {
    try {
      let response = await getUserJobs();

      response = await response.data;
      let jobs = response.data;
      return jobs;
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

export { useProjectsData };
