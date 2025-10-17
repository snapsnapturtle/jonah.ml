import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/thoughts/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <ul className="-m-2">
        <Link
          to="/thoughts/re-leveling-an-engineering-org"
          className="hover:no-underline"
          viewTransition={{ types: ["fade"] }}
        >
          <li className="flex flex-col sm:flex-row gap-1 sm:gap-2 rounded p-2 justify-between cursor-pointer border border-transparent hover:border-blue-300 dark:hover:border-blue-300/20 hover:bg-blue-50/50 dark:hover:bg-blue-700/5">
            <span>Re-leveling an engineering org</span>
            <span className="text-offgray-800 dark:text-offgray-300">
              October 2025
            </span>
          </li>
        </Link>
      </ul>
    </div>
  );
}
