import { getAuthToken } from "../utils/helpers";
import httpService from "./httpService";

const route = `/jobs`;

export async function CreateJob(body) {
  const authToken = getAuthToken();
  return await httpService.post(`${route}`, body, {
    headers: {
      "x-auth-token": authToken,
    },
  });
}
 
