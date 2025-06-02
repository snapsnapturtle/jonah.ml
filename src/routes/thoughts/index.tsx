import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/thoughts/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Link
        to="/thoughts/implementing-an-architecture-review"
        viewTransition={{ types: ["fade"] }}
      >
        Implementing an architecutre review
      </Link>
      Engineering leadership principles Cultivate radical ownership Champion
      transparency & candor Drive empowered collaboration Deliver results with
      quality & velocity Foster continuous learning & growth Cultivate radical
      ownership Empower and expect managers and their teams to take full,
      end-to-end responsibility for their domain, commitments, quality, and
      ultimate outcomes. Observable positive behaviors (EMs) Delegates
      effectively with clear outcomes, not just tasks; empowers the team to make
      decisions within their scope. Holds the team accountable for commitments,
      quality standards, and deadlines; doesn't shy from difficult conversations
      about performance. Proactively identifies and removes roadblocks for the
      team, even if those roadblocks are outside their direct team's control.
      Encourages the team to think long-term, consider the broader company
      impact, and act on behalf of the entire organization. Anti-patterns to
      avoid (EMs) Micromanaging team members; dictating every step of a task,
      stifling initiative. Blaming other individuals, teams, or external factors
      for team shortcomings; frequently stating "that's not my team's job" or
      "it's not my fault". Sacrificing long-term value (e.g., architectural
      integrity, managing technical debt, team health) for short-term results
      without a clear, communicated strategic rationale. Creating or
      perpetuating silos; fostering an "us vs. them" mentality with other teams
      or departments. Champion transparency & candor Foster open, honest,
      direct, and respectful communication at all levels; share information
      proactively and provide/receive constructive feedback consistently.
      Observable positive behaviors (EMs) Proactively shares relevant
      information, context, and rationale behind decisions with the team.
      Provides regular, specific, and constructive feedback (both positive and
      critical) in a timely and respectful manner. Actively listens to team
      members' concerns and feedback, creating a safe space for open dialogue.
      Admits own mistakes openly and shares learnings with the team to foster a
      culture of improvement. Anti-patterns to avoid (EMs) Withholding important
      information or context from the team; creating an environment of
      information asymmetry. Avoiding difficult performance feedback, leading to
      unresolved issues or surprises during formal reviews; delivering feedback
      harshly or insensitively. Dismissing team members' concerns or feedback
      without due consideration; becoming defensive when receiving feedback.
      Creating a culture of blame where mistakes are hidden or punished, rather
      than used for learning. Drive empowered collaboration Build an environment
      where teams and individuals work together seamlessly and effectively,
      breaking down silos and leveraging diverse perspectives to achieve shared
      goals. Observable positive behaviors (EMs) Actively facilitates
      cross-functional work and breaks down silos between their team, other eng
      teams, product, and design. Encourages diverse perspectives in
      problem-solving and decision-making processes within the team. Establishes
      clear communication channels and norms for interaction within the team and
      with external stakeholders. Champions shared goals and ensures the team
      understands how their collaborative efforts contribute to larger
      objectives. Anti-patterns to avoid (EMs) Discouraging interaction with
      other teams; fostering an "empire-building" or territorial mindset within
      the team. Making critical decisions in isolation without consulting
      relevant team members or stakeholders; command-and-control style. Allowing
      unresolved conflicts or personality clashes to fester within the team,
      hindering productivity and morale. Instituting "collaboration theater" –
      excessive meetings without clear agendas, outcomes, or accountability.
      Deliver results with quality & velocity Focus relentlessly on consistently
      delivering tangible value to customers and the business through timely,
      high-quality execution, balancing speed with sustainable engineering
      practices. Observable positive behaviors (EMs) Effectively plans and
      prioritizes work, aligning team efforts with high-impact business and
      customer outcomes. Proactively identifies and removes impediments,
      ensuring the team maintains a steady and predictable delivery pace.
      Champions robust quality practices (e.g., code reviews, automated testing,
      CI/CD) and ensures they are followed. Balances the need for new feature
      development with essential maintenance, refactoring, and technical debt
      repayment. Anti-patterns to avoid (EMs) Focusing solely on output metrics
      (e.g., story points, tasks closed) without considering the actual value or
      impact delivered. Consistently pushing for speed at the expense of
      quality, leading to high defect rates, rework, and accumulating technical
      debt. Allowing technical debt to accumulate unmanaged, significantly
      impacting future development velocity and system stability. Frequently
      missing delivery commitments or having unpredictable release cycles
      without clear root cause analysis and corrective action. Foster continuous
      learning & growth Cultivate an organizational mindset of perpetual
      improvement, intellectual curiosity, and adaptation for individuals,
      teams, and processes, embracing failures as crucial learning
      opportunities. Observable positive behaviors (EMs) Encourages
      experimentation and the exploration of new technologies/approaches
      relevant to team goals. Provides regular coaching and mentorship; supports
      team members in identifying and pursuing skill development opportunities.
      Facilitates blameless post-mortems and retrospectives to extract learnings
      from both successes and failures. Creates a psychologically safe
      environment where team members feel comfortable admitting they don't know
      something or asking for help. Anti-patterns to avoid (EMs) Discouraging or
      punishing well-intentioned experiments that don't yield immediate success;
      fostering a fear of failure. Viewing training and development activities
      as a cost or distraction, rather than an investment in team capability and
      retention. Failing to provide clear career paths or growth opportunities
      for engineers, leading to stagnation and potential attrition. Resisting
      new ideas or approaches from the team; maintaining a "this is how we've
      always done it" mentality.
    </div>
  );
}
