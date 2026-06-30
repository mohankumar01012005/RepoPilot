import {
  FolderGit2,
  ExternalLink,
  CheckCircle2,
  PauseCircle,
} from "lucide-react";

const repositories = [
  {
    name: "RepoPilot",
    branch: "main",
    status: "Active",
    lastActivity: "2 min ago",
    active: true,
  },
  {
    name: "AeroFlow",
    branch: "main",
    status: "Active",
    lastActivity: "15 min ago",
    active: true,
  },
  {
    name: "CareerCraft",
    branch: "develop",
    status: "Paused",
    lastActivity: "Yesterday",
    active: false,
  },
  {
    name: "CloudSave",
    branch: "main",
    status: "Active",
    lastActivity: "1 hour ago",
    active: true,
  },
];

function RepositoryTable() {
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
                Last Activity
              </th>

              <th className="pb-4 font-semibold text-right">
                Action
              </th>

            </tr>
          </thead>

          <tbody>

            {repositories.map((repo) => (
              <tr
                key={repo.name}
                className="border-b border-gray-100 hover:bg-gray-50"
              >

                <td className="py-5">

                  <div className="flex items-center gap-3">

                    <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
                      <FolderGit2 size={20} />
                    </div>

                    <div>

                      <p className="font-semibold">
                        {repo.name}
                      </p>

                      <p className="text-sm text-gray-500">
                        github.com/mohankumar01012005/{repo.name}
                      </p>

                    </div>

                  </div>

                </td>

                <td className="font-medium">
                  {repo.branch}
                </td>

                <td>

                  {repo.active ? (
                    <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                      <CheckCircle2 size={16} />
                      {repo.status}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700">
                      <PauseCircle size={16} />
                      {repo.status}
                    </span>
                  )}

                </td>

                <td className="text-gray-500">
                  {repo.lastActivity}
                </td>

                <td className="text-right">

                  <button className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 transition hover:bg-gray-100">

                    Open

                    <ExternalLink size={16} />

                  </button>

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