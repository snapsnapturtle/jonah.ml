import { createFileRoute } from "@tanstack/react-router";
import { SocialLinks } from "@/components/SocialLinks";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex flex-col">
      <p>
        Jonah Möller is an Engineering Manager at{" "}
        <a href="//www.goflink.com/" target="_blank" rel="noreferrer noopener">
          Flink
        </a>
        , an online supermarket that delivers high-quality and fresh groceries
        to your door in minutes. The technologies he works with the most are Go
        and Kotlin, as well as React with TypeScript.
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
