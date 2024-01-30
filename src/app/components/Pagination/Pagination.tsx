"use client";
import { useState, useMemo, useCallback } from "react";
import { Dispatch, SetStateAction } from "react";
import { handleSetPage } from "./utils";

interface PaginationProps {
  total: number | undefined;
  limit: number | undefined;
  setPage: Dispatch<SetStateAction<number>>;
}

export const Pagintaion: React.FC<PaginationProps> = ({
  total,
  limit,
  setPage,
}) => {
  const totalpages = useMemo(() => {
    let count;
    if (total && limit) {
      count = total / limit;
    }
    if (!total || !limit) {
      count = 0;
    }
    if (count) {
      let resArr = [];
      for (let i = 0; i < count; i++) {
        resArr[i] = i;
      }
      return resArr;
    }
    if (!count) {
      return [];
    }
  }, [total, limit]);

  const handlePage = useCallback((item: any) => {
    handleSetPage(setPage, item);
  }, []);

  return (
    <div>
      <button>{"<"}</button>
      {totalpages?.map((item: number, index: number) => (
        <button key={index} onClick={() => handlePage(item)}>
          {item}
        </button>
      ))}
      <button>{">"}</button>
    </div>
  );
};
