import { ethers } from "ethers";
import httpService from "../services/httpService";

export const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem("ufd-auth-token", token);
    httpService.setJwt(token);
  }
};

export const getAuthToken = () => {
  return localStorage.getItem("ufd-auth-token");
};

export const getProvider = () => {
  return new ethers.providers.Web3Provider(window.ethereum);
};

export const getSigner = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  return provider.getSigner();
};
