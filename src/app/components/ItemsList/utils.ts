import { Dispatch } from "react";
export const dataFetcher = async () => {
  const res = await fetch(
    "https://dummyjson.com/products?limit=10&page=0&skip=10"
  );
  const response = res.json();
  return response
};
