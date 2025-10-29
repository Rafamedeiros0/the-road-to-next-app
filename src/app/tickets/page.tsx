import { Suspense } from "react";
// import { ErrorBoundary } from "react-error-boundary";
import { Heading } from "@/components/heading";
// import { PlaceholderV2 } from "@/components/placeholderV2";
import { Spinner } from "@/components/spinner";
import { TicketList } from "@/features/ticket/components/ticket-list";

export const revalidate = 30;

const TicketsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading title="Tickets" description="All your tickets at one place" />

      {/* <ErrorBoundary fallback={<PlaceholderV2 title="Something went wrong!" />}> */}
      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
      {/* </ErrorBoundary> */}
    </div>
  );
};

export default TicketsPage;
