"use client";

import { PlaceholderV2 } from "@/components/placeholderV2";

export default function Error({ error }: { error: Error }) {
  return <PlaceholderV2 title={error.message} />;
}
