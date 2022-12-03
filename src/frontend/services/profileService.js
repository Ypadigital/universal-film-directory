import { getAuthToken } from "../utils/helpers";
import httpService from "./httpService";

const route = `/profiles`;

export async function getAllProfiles() {
  const authToken = getAuthToken();
  return await httpService.get(`${route}/`, {
    headers: {
      "x-auth-token": authToken,
    },
  });
}
