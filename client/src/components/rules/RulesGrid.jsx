import RuleCard from "./RuleCard";

const rules = [
  {
    id: "FF-90210",
    title: "Auto-label Bugs",
    icon: "bug",
    enabled: true,
    trigger: "On Issue Created",
    actions: [
      "Add bug label",
      "Notify Slack",
    ],
    lastRun: "2 mins ago",
  },
  {
    id: "FF-77421",
    title: "Stale PR Notifier",
    icon: "schedule",
    enabled: false,
    trigger: "Daily 09:00 AM",
    actions: [
      "Comment PR",
      "Assign Reviewer",
    ],
    lastRun: "3 days ago",
  },
  {
    id: "FF-12290",
    title: "Auto-block Secrets",
    icon: "security",
    enabled: true,
    trigger: "On Push",
    actions: [
      "Block Merge",
      "Log Violation",
    ],
    lastRun: "15 mins ago",
  },
];

function RulesGrid() {
  return (
    <section className="grid gap-6 xl:grid-cols-2">

      {rules.map((rule) => (
        <RuleCard
          key={rule.id}
          rule={rule}
        />
      ))}

      <button className="flex min-h-[340px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 transition hover:bg-gray-100">

        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-5xl shadow">

          +

        </div>

        <h2 className="mt-6 text-2xl font-bold">
          Add Custom Rule
        </h2>

        <p className="mt-3 text-center text-gray-500">
          Configure new GitHub automation
          <br />
          workflows for your repositories.
        </p>

        <button className="mt-8 rounded-xl bg-black px-6 py-3 font-semibold text-white hover:opacity-90">

          Create Rule

        </button>

      </button>

    </section>
  );
}

export default RulesGrid;