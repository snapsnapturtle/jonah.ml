import { Outlet, createRootRoute } from "@tanstack/react-router";

import Header from "../components/Header";

export const Route = createRootRoute({
  component: () => (
    <div>
      <Header />
      <div className="max-w-[75ch] m-6 md:mx-auto flex flex-col gap-12 [view-transition-name:main-content] animate-pageIn">
        <Outlet />
      </div>
    </div>
  ),
});
