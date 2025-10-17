import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/thoughts/re-leveling-an-engineering-org",
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1 className="heading1">Re-leveling an engineering org</h1>
      <p>
        Currently writing the first thing on the transition to the Chief of
        Staff role.
      </p>
      <h2 className="heading2">Monday: Organize Emails</h2>
      <pre>
        <code>const hello = "world";</code>
      </pre>
      <p>
        Unsubscribe from any newsletters you never read. Create folders (or
        labels) for different types of emails, such as ones from different
        departments, or based on who they’re from, or what projects they’re
        related to. Delete or archive old messages that are just cluttering your
        inbox at this point. Mark the emails you still need to take action on.
      </p>
      <h2 className="heading2">Tuesday: Think Through Your Next Big Project</h2>
      <p>
        Start thinking about how you’ll go about it and getting organized. A
        short burst of proactive research could equip you with better
        information - and spare you that time when you’re more motivated and
        ready to work on the project itself.
      </p>
      <h2 className="heading2">Wednesday: Work on Your Thought Leadership</h2>
      <p>
        Work on becoming more of a thought leader in your industry by catching
        up on the latest content in your niche. Get up to speed on any new
        developments and engage with others by sharing articles on LinkedIn and
        starting discussions.
      </p>
      <h2 className="heading2">Thursday: Declutter Your Desk</h2>
      <p>
        Cleaning up your desk is a great task for a day when you’re counting the
        minutes until Friday: discard unnecessary papers, file away anything
        urgent, wash out your coffee mug, and give your desk and keyboard a
        thorough clean.
      </p>
      <h2 className="heading2">Friday: Make a Schedule for Next Week</h2>
      <p>
        Make a task list for everything you’d like to accomplish next week.
        Break any larger projects into smaller, more manageable tasks. Rank
        everything on your list and assign priorities. Create a realistic
        timetable for getting everything done.
      </p>
    </div>
  );
}
