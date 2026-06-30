import {
  FolderGit2,
  Activity,
  ShieldCheck,
  Filter,
} from "lucide-react";

const stats = [
  {
    title: "Total Repositories",
    value: "12",
    subtitle: "Connected",
    icon: <FolderGit2 size={24} />,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Active Webhooks",
    value: "11",
    subtitle: "92% Healthy",
    icon: <ShieldCheck size={24} />,
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Daily Triggers",
    value: "842",
    subtitle: "Today",
    icon: <Activity size={24} />,
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Filters",
    value: "",
    subtitle: "Filter Repository List",
    icon: <Filter size={24} />,
    color: "bg-gray-100 text-gray-600",
    filter: true,
  },
];

function RepositoryStats() {
  return (
    <section className="mb-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((card) => (
        <div
          key={card.title}
          className={`rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg ${
            card.filter ? "cursor-pointer border-dashed" : ""
          }`}
        >
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl ${card.color}`}
          >
            {card.icon}
          </div>

          {card.filter ? (
            <>
              <h3 className="mt-6 text-xl font-bold">
                Filter
              </h3>

              <p className="mt-2 text-gray-500">
                {card.subtitle}
              </p>
            </>
          ) : (
            <>
              <h2 className="mt-6 text-4xl font-black">
                {card.value}
              </h2>

              <p className="mt-2 font-semibold">
                {card.title}
              </p>

              <p className="mt-1 text-sm text-gray-500">
                {card.subtitle}
              </p>
            </>
          )}
        </div>
      ))}
    </section>
  );
}

export default RepositoryStats;