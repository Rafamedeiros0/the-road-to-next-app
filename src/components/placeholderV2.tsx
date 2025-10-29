import { LucideMessageSquareWarning } from "lucide-react";
import { cloneElement } from "react";
import { Button } from "./ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "./ui/empty";

type PlaceholderProps = {
  title: string;
  description?: string;
  icon?: React.ReactElement<{ className?: string }>;
  button?: React.ReactElement<{ className?: string }>;
  // button?: React.ReactElement<React.HTMLAttributes<HTMLElement>>;
};

const PlaceholderV2 = ({
  title,
  description,
  icon = <LucideMessageSquareWarning />,
  button = <div />,
}: PlaceholderProps) => {
  return (
    <div className="flex-1 self-center flex flex-col items-center justify-center gap-y-2">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">{icon}</EmptyMedia>
          <EmptyTitle>{title}</EmptyTitle>
          {description ?? <EmptyDescription>{description}</EmptyDescription>}
        </EmptyHeader>
        <EmptyContent>
          {cloneElement(button, { className: "h-10" })}
        </EmptyContent>
      </Empty>
    </div>
  );
};

export { PlaceholderV2 };
