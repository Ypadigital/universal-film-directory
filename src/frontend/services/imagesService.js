import httpService from "./httpService";

const route = `/images`;

export async function createImage(body) {
  const formData = new FormData();
  formData.append("file", body.file);
  return httpService.post(`${route}/upload`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
