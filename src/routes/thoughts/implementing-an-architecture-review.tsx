import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/thoughts/implementing-an-architecture-review",
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1 className="text-black dark:text-offgray-50 font-semibold text-xl">
        Implementing an architecture review
      </h1>
    </div>
  );
}
