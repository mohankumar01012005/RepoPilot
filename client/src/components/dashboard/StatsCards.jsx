import {
  FolderGit2,
  Activity,
  CheckCircle2,
  Bell,
} from "lucide-react";

const stats = [
  {
    title: "Repositories",
    value: "12",
    subtitle: "+2 this week",
    icon: <FolderGit2 size={24} />,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Events Today",
    value: "154",
    subtitle: "GitHub Webhooks",
    icon: <Activity size={24} />,
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Success Rate",
    value: "99.4%",
    subtitle: "Automations",
    icon: <CheckCircle2 size={24} />,
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Slack Alerts",
    value: "31",
    subtitle: "Sent Today",
    icon: <Bell size={24} />,
    color: "bg-orange-50 text-orange-600",
  },
];

function StatsCards() {
  return (
    <section className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((card) => (
        <div
          key={card.title}
          className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="flex items-center justify-between">
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-xl ${card.color}`}
            >
              {card.icon}
            </div>

            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              Live
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-black">
            {card.value}
          </h2>

          <p className="mt-2 text-lg font-semibold">
            {card.title}
          </p>

          <p className="mt-1 text-sm text-gray-500">
            {card.subtitle}
          </p>
        </div>
      ))}
    </section>
  );
}

export default StatsCards;