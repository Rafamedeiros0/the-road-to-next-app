import { prisma } from "@/lib/prisma";
import { ParsedSearchParams } from "../search-params";

export const getTickets = async (
  searchParams: ParsedSearchParams,
  userId?: string,
) => {
  const searchedParams = await searchParams;

  const where = {
    userId,
    title: {
      contains: searchedParams.search,
      mode: "insensitive" as const,
    },
  };

  const skip = searchedParams.page * searchedParams.size;
  const take = searchedParams.size;

  const tickets = await prisma.ticket.findMany({
    where,
    skip,
    take,
    orderBy: {
      [searchedParams.sortKey]: searchedParams.sortValue,
    },
    include: {
      User: {
        select: {
          name: true,
        },
      },
    },
  });

  const count = await prisma.ticket.count({
    where,
  });

  return {
    list: tickets,
    metadata: {
      count,
      hasNextPage: count > skip + take,
    },
  };
};
