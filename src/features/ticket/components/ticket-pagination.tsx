"use client";

import { Pagination } from "@/components/pagination";
import { useQueryStates } from "nuqs";
import { paginationOptions, paginationParser } from "../search-params";

type TicketPaginationProps = {
  paginetedTicketMetadata: {
    count: number;
    hasNextPage: boolean;
  };
};

const TicketPagination = ({
  paginetedTicketMetadata,
}: TicketPaginationProps) => {
  const [pagination, setPagination] = useQueryStates(
    paginationParser,
    paginationOptions,
  );

  return (
    <Pagination
      pagination={pagination}
      onPagination={setPagination}
      paginatedMetadata={paginetedTicketMetadata}
    />
  );
};

export { TicketPagination };
