import { prisma } from "@/lib/prisma";
import { SearchParamsInput } from "../search-params";

export const getTickets = async (
  userId: string | undefined,
  searchParams: SearchParamsInput,
) => {
  const searchedParams = searchParams;

  const where = {
    userId,
    title: {
      contains: searchedParams.search,
      mode: "insensitive" as const,
    },
  };

  const skip = searchedParams.page * searchedParams.size;
  const take = searchedParams.size;

  const [tickets, count] = await prisma.$transaction([
    prisma.ticket.findMany({
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
    }),
    prisma.ticket.count({
      where,
    }),
  ]);

  return {
    list: tickets,
    metadata: {
      count,
      hasNextPage: count > skip + take,
    },
  };
};
