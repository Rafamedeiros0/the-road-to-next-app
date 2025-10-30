import Link from "next/link";
import { PlaceholderV2 } from "@/components/placeholderV2";
import { Button } from "@/components/ui/button";
import { ticketsPath } from "@/paths";

export default function NotFound() {
  return (
    <PlaceholderV2
      title="Ticket not found"
      description="The ticket you're looking for doesn't exist."
      button={
        <Button asChild variant="outline">
          <Link href={ticketsPath()}>Go to Tickets</Link>
        </Button>
      }
    />
  );
}
