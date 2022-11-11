import httpService from "./httpService";

const route = `/users`;

async function RegisterUser(body) {
  await httpService.post(`${route}/register`, body);
}

async function getArticles() {
  const url = process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/insights";
  let data = await fetch(url);
  data = await data.json();

  return data;
}

export { RegisterUser, getArticles };
