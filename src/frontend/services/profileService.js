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

export async function getProfileById(id) {
  const authToken = getAuthToken();
  return await httpService.get(`${route}/${id}`, {
    headers: {
      "x-auth-token": authToken,
    },
  });
}

export async function getFilteredProfiles(query) {
  const authToken = getAuthToken();
  let queryUrl = `search?${query}`;
  if (!query) queryUrl = "search";
  return httpService.get(`${route}/${queryUrl}`, {
    headers: { "x-auth-token": authToken },
  });
}
