import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/thoughts/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Currently writing the first thing on the transition to the Chief of Staff
      role.
    </div>
  );
}
