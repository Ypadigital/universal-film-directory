import { getAuthToken } from "../utils/helpers";
import httpService from "./httpService";

const route = `/users`;

export async function RegisterUser(body) {
  return await httpService.post(`${route}/register`, body);
}

export async function LoginUser(body) {
  return await httpService.post(`${route}/login`, body);
}

export async function getUserDetails() {
  const authToken = getAuthToken();
  return await httpService.get(`${route}/me`, {
    headers: {
      "x-auth-token": authToken,
    },
  });
}

export async function editUserProfile(body) {
  const authToken = getAuthToken();
  return await httpService.put(`${route}/profile`, body, {
    headers: {
      "x-auth-token": authToken,
    },
  });
}

export async function getUserJobs() {
  const authToken = getAuthToken();
  return await httpService.get(`${route}/jobs`, {
    headers: {
      "x-auth-token": authToken,
    },
  });
}

export async function getUserServices() {
  const authToken = getAuthToken();
  return await httpService.get(`${route}/services`, {
    headers: {
      "x-auth-token": authToken,
    },
  });
}

export async function getArticles() {
  const url = process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/insights";
  let data = await fetch(url);
  data = await data.json();

  return data;
}
