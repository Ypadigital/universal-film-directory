export async function getFilteredProfiles(query: string) {
  let queryUrl = `search?${query}`;
  if (!query) queryUrl = "search";
  return httpService.get(`${route}/${queryUrl}`);
}
