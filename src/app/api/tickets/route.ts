import { getTickets } from "@/features/ticket/queries/get-tickets";

export async function GET() {
  const { list, metadata } = await getTickets(
    {
      search: "",
      size: 5,
      page: 0,
      sortKey: "createdAt",
      sortValue: "desc",
    },
    undefined,
  );

  return Response.json({ list, metadata });
}
