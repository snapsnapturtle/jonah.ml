import { createFileRoute } from "@tanstack/react-router";
import { SocialLinks } from "@/components/SocialLinks";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex flex-col">
      <p>
        Jonah Möller is the Chief of Staff to the CTO at{" "}
        <a
          href="//www.schuettflix.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Schüttflix
        </a>
        , a scale-up in the construction industry, with a focus on building and
        marketplace for (recycled) materials. The technologies he works with the
        most are Kotlin with Spring and React in TypeScript and recently has
        taken an interest in learning Go.
      </p>
      <p>
        Apart from work-related projects, he enjoys playing the piano,{" "}
        <a
          href="//instagram.com/snapsnapturtle/"
          target="_blank"
          rel="noreferrer noopener"
        >
          capturing moments with his camera
        </a>{" "}
        and building mechanical keyboards.
      </p>
      <div className="mt-6">
        <SocialLinks />
      </div>
    </main>
  );
}
