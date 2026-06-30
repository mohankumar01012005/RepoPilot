import {
  FolderGit2,
  ExternalLink,
  CheckCircle2,
  PauseCircle,
} from "lucide-react";

import { useDashboardRepositories } from "../../hooks/useDashboard";

function RepositoryTable() {
  const {
  data: repositories,
  isLoading,
  error,
} = useDashboardRepositories();

  if (isLoading) {
    return (
      <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 text-center">
        Loading repositories...
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-6 text-center text-red-600">
        Failed to load repositories.
      </div>
    );
  }

  return (
    <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            Connected Repositories
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Manage repositories connected to RepoPilot.
          </p>
        </div>

        <button className="rounded-xl bg-black px-5 py-2 text-sm font-medium text-white transition hover:opacity-90">
          + Connect Repository
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">

          <thead>
            <tr className="border-b border-gray-200 text-left">

              <th className="pb-4 font-semibold">
                Repository
              </th>

              <th className="pb-4 font-semibold">
                Branch
              </th>

              <th className="pb-4 font-semibold">
                Status
              </th>

              <th className="pb-4 font-semibold">
                Events
              </th>

              <th className="pb-4 font-semibold">
                Actions
              </th>

              <th className="pb-4 text-right font-semibold">
                Open
              </th>

            </tr>
          </thead>

          <tbody>

            {repositories?.map((repo) => (
              <tr
                key={repo._id}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="py-5">
                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">

                      <FolderGit2
                        size={20}
                        className="text-blue-600"
                      />

                    </div>

                    <div>

                      <p className="font-semibold">
                        {repo.name}
                      </p>

                      <p className="text-xs text-gray-500">
                        {repo.fullName}
                      </p>

                    </div>

                  </div>
                </td>

                <td>
                  {repo.defaultBranch}
                </td>

                <td>
                  <span
                    className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ${
                      repo.isActive
                        ? "bg-green-100 text-green-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {repo.isActive ? (
                      <CheckCircle2 size={16} />
                    ) : (
                      <PauseCircle size={16} />
                    )}

                    {repo.isActive
                      ? "Active"
                      : "Paused"}
                  </span>
                </td>

                <td>
                  {repo.events}
                </td>

                <td>
                  {repo.actions}
                </td>

                <td className="text-right">
                  <a
                    href={`https://github.com/${repo.fullName}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 hover:bg-gray-100"
                  >
                    Open

                    <ExternalLink
                      size={16}
                    />
                  </a>
                </td>

              </tr>
            ))}

          </tbody>

        </table>
      </div>
    </section>
  );
}

export default RepositoryTable;