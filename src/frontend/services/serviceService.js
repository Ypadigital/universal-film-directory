import { getAuthToken } from "../utils/helpers";
import httpService from "./httpService";

const route = `/services`;

export async function CreateService(body) {
  const authToken = getAuthToken();
  return await httpService.post(`${route}`, body, {
    headers: {
      "x-auth-token": authToken,
    },
  });
}

export async function UpdateService(body) {
  const id = body.id;
  delete body.id;
  const authToken = getAuthToken();
  return await httpService.put(`${route}/${id}`, body, {
    headers: {
      "x-auth-token": authToken,
    },
  });
}

export async function getAllServices() {
  const authToken = getAuthToken();
  return await httpService.get(`${route}/`, {
    headers: {
      "x-auth-token": authToken,
    },
  });
}
