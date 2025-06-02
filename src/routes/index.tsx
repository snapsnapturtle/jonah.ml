import { createFileRoute } from "@tanstack/react-router";
import { SocialLinks } from "@/components/SocialLinks";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex flex-col gap-6">
      <p>
        Jonah Möller is an engineering manager from Hamburg, Germany currently
        building products at{" "}
        <a
          href="//www.schuettflix.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Schüttflix
        </a>
        , a scale-up in the construction industry, with a focus on recycled
        materials. The technologies he works with the most are Kotlin with
        Spring and React in TypeScript (and recently some Go).
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
