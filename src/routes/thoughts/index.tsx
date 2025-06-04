import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/thoughts/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <ul>
        <li>
          <Link
            to="/thoughts/implementing-an-architecture-review"
            viewTransition={{ types: ["fade"] }}
          >
            Implementing an architecutre review
          </Link>
        </li>
      </ul>
    </div>
  );
}
