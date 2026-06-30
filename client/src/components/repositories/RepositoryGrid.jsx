import {
  Link2,
} from "lucide-react";

import RepositoryCard from "./RepositoryCard";

const repositories = [
  {
    name: "RepoPilot",
    icon: "code",
    private: false,
    updated: "2 hours ago",
    webhook: "Healthy",
    healthy: true,
    rules: "5 Active",
    members: "4 Collaborators",
  },
  {
    name: "AeroFlow",
    icon: "terminal",
    private: true,
    updated: "14 mins ago",
    webhook: "404 Error",
    healthy: false,
    rules: "12 Active",
    members: "12 Collaborators",
  },
  {
    name: "CareerCraft",
    icon: "database",
    private: true,
    updated: "Yesterday",
    webhook: "Healthy",
    healthy: true,
    rules: "3 Active",
    members: "2 Collaborators",
  },
];

function RepositoryGrid({
  onConnect,
}) {
  return (
    <section className="grid gap-6 lg:grid-cols-2">

      {repositories.map((repo) => (
        <RepositoryCard
          key={repo.name}
          repository={repo}
        />
      ))}

      <div className="flex min-h-[340px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 transition hover:bg-gray-100">

        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow">

          <Link2 size={36} />

        </div>

        <h2 className="mt-6 text-2xl font-bold">
          Connect Repository
        </h2>

        <p className="mt-3 text-center text-gray-500">
          Connect another GitHub repository
          <br />
          to start automating workflows.
        </p>

        <button className="mt-8 rounded-xl bg-black px-6 py-3 font-semibold text-white transition hover:opacity-90">
          Connect Now
        </button>

      </div>

    </section>
  );
}

export default RepositoryGrid;