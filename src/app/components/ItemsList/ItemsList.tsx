"use client";
import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { dataFetcher } from "./utils";
import { Pagintaion } from "../Pagination/Pagination";

interface ProductProps {
  brand: string;
  category: string;
  description: string;
  discountPercentage: 8.4;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

interface ProductsFetchProps {
  limit: number;
  products: ProductProps[];
  skip: number;
  total: number;
}

export const ItemsList:React.FC = () => {
  const [list, setList] = useState<null | ProductsFetchProps>(null);
  const [currentPage,setCurrentPage] = useState<number>(0)
  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted.current) {
      dataFetcher().then((res) => setList(res));
      isMounted.current = false;
    }
  }, [isMounted]);

  const products = useMemo(() => {
    if (list) {
      const { products } = list;
      return products;
    }
    if (!list) {
      return [];
    }
  }, [list]);

  return (
    <ul>
      {products?.map((item: ProductProps) => (
        <li key={item.id} id={String(item.id)}>
          <p>{item.title}</p>
        </li>
      ))}
      <Pagintaion total={list?.total} limit={list?.limit} setPage={setCurrentPage}/>
    </ul>
  );
};
