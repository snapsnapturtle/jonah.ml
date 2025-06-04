import { Link } from "@tanstack/react-router";
import type { LinkProps } from "@tanstack/react-router";

function HeaderLink(props: LinkProps) {
  return (
    <Link
      className="hover:no-underline select-none rounded-sm text-nowrap transition-colors duration-75 text-black dark:text-offgray-50 hover:bg-offgray-100/50 dark:hover:bg-offgray-500/10 px-3 py-1"
      viewTransition={{ types: ["fade"] }}
      {...props}
    />
  );
}

export default function Header() {
  return (
    <header className="my-8 py-3 px-6 mt-12 md:mt-20 flex flex-col gap-12 sticky top-0 bg-gradient-to-t from-cream-50/40 to-cream-50 dark:from-offgray-1000/40 dark:to-offgray-1000 backdrop-blur-sm z-5">
      <nav className="max-w-[75ch] w-full mx-auto flex flex-row justify-between items-center">
        <div className="text-md 2xl:text-xl font-bold tracking-tight text-black dark:text-offgray-50">
          $ whois{" "}
          <Link
            to="/"
            className="hover:no-underline special"
            viewTransition={{ types: ["fade"] }}
          >
            jonah.ml
          </Link>
        </div>
        <div className="flex flex-row">
          <HeaderLink to="/">Home</HeaderLink>
          <HeaderLink to="/thoughts">Blog</HeaderLink>
        </div>
      </nav>
    </header>
  );
}
