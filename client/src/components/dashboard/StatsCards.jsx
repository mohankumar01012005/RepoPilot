import {
  FolderGit2,
  Activity,
  CheckCircle2,
  Bell,
} from "lucide-react";

import { useDashboardStats } from "../../hooks/useDashboard";

function StatsCards() {
  const {
    data: stats,
    isLoading,
    error,
  } = useDashboardStats();

  if (isLoading) {
    return (
      <div className="mt-8 text-center">
        Loading dashboard...
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-8 rounded-xl border border-red-200 bg-red-50 p-6 text-center text-red-600">
        Failed to load dashboard statistics.
      </div>
    );
  }

  const cards = [
    {
      title: "Repositories",
      value: stats?.repositories ?? 0,
      subtitle: "Connected repositories",
      icon: <FolderGit2 size={24} />,
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "Events",
      value: stats?.events ?? 0,
      subtitle: "Webhook events received",
      icon: <Activity size={24} />,
      color: "bg-purple-100 text-purple-700",
    },
    {
      title: "Successful Actions",
      value: stats?.successActions ?? 0,
      subtitle: "Automation completed",
      icon: <CheckCircle2 size={24} />,
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Failed Actions",
      value: stats?.failedActions ?? 0,
      subtitle: "Need attention",
      icon: <Bell size={24} />,
      color: "bg-red-100 text-red-700",
    },
  ];

  return (
    <section className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
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