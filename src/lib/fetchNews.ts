export const fetchNews = async (category: string = "", search: string = "") => {
  try {
    const categoryParam =
      category && category !== "all" ? `category=${category}&` : "";
    const response = await fetch(
      `https://news-api-next-js-kappa.vercel.app/api/news?${categoryParam}search=${search}`
    );

    if (!response.ok) {
      throw new Error(response.status.toString());
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
