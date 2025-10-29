import { Suspense } from "react";
import { CardCompact } from "@/components/card-compact";
// import { ErrorBoundary } from "react-error-boundary";
import { Heading } from "@/components/heading";
// import { PlaceholderV2 } from "@/components/placeholderV2";
import { Spinner } from "@/components/spinner";
import { TicketCreateForm } from "@/features/ticket/components/ticket-create-form";
import { TicketList } from "@/features/ticket/components/ticket-list";

const TicketsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading title="Tickets" description="All your tickets at one place" />

      <CardCompact
        title="Create Ticket"
        description="A new ticket will be created"
        className="w-full max-w-[420px] self-center"
        content={<TicketCreateForm />}
      />

      {/* <ErrorBoundary fallback={<PlaceholderV2 title="Something went wrong!" />}> */}
      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
      {/* </ErrorBoundary> */}
    </div>
  );
};

export default TicketsPage;
