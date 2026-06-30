import { Link2 } from "lucide-react";

import RepositoryCard from "./RepositoryCard";

import { useDashboardRepositories } from "../../hooks/useDashboard";

function RepositoryGrid({ onConnect }) {
  const {
    data: repositories,
    isLoading,
    error,
  } = useDashboardRepositories();

  if (isLoading) {
    return (
      <section className="rounded-2xl border border-gray-200 bg-white p-10 text-center">
        Loading repositories...
      </section>
    );
  }

  if (error) {
    return (
      <section className="rounded-2xl border border-red-200 bg-red-50 p-10 text-center text-red-600">
        Failed to load repositories.
      </section>
    );
  }

  return (
    <section className="grid gap-6 lg:grid-cols-2">

      {repositories?.map((repo) => (
        <RepositoryCard
          key={repo._id}
          repository={repo}
        />
      ))}

      <div
        onClick={onConnect}
        className="flex min-h-[340px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 transition hover:bg-gray-100"
      >
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

        <button
          onClick={onConnect}
          className="mt-8 rounded-xl bg-black px-6 py-3 font-semibold text-white transition hover:opacity-90"
        >
          Connect Now
        </button>
      </div>

    </section>
  );
}

export default RepositoryGrid;