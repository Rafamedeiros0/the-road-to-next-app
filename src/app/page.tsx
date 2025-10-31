import { Heading } from "@/components/heading";
import { Spinner } from "@/components/spinner";
import { TicketList } from "@/features/ticket/components/ticket-list";
import { TicketSearchParamsAsync } from "@/features/ticket/search-params";
import { Suspense } from "react";

type HomePageProps = {
  searchParams: TicketSearchParamsAsync;
};

const HomePage = async ({ searchParams }: HomePageProps) => {
  const params = await searchParams;

  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading
        title="All Tickets"
        description="Tickets by everyone at one place"
      />

      <Suspense fallback={<Spinner />}>
        <TicketList searchParams={params} />
      </Suspense>
    </div>
  );
};

export default HomePage;
