import {
  Search,
  X,
  Info,
} from "lucide-react";

import { useMemo, useState } from "react";

import RepositoryItem from "./RepositoryItem";

import { useRepositories } from "../../hooks/useRepositories";
import { useDashboardRepositories } from "../../hooks/useDashboard";

function ConnectRepositoryModal({
  open,
  onClose,
}) {
  const [search, setSearch] = useState("");

  const {
    data: githubRepositories = [],
    isLoading,
    error,
  } = useRepositories();

  const {
    data: connectedRepositories = [],
  } = useDashboardRepositories();

  

  const connectedNames = useMemo(() => {
    return new Set(
      connectedRepositories.map(
        (repo) => repo.fullName
      )
    );
  }, [connectedRepositories]);

  const filteredRepositories =
    githubRepositories.filter((repo) =>
      repo.full_name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-5 backdrop-blur-sm">

      <div className="flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl">

        {/* Header */}

        <div className="border-b border-gray-200 p-7">

          <div className="flex items-start justify-between">

            <div>

              <h2 className="text-3xl font-black">
                Connect Repository
              </h2>

              <p className="mt-2 text-gray-500">
                Select one of your GitHub repositories.
              </p>

            </div>

            <button
              onClick={onClose}
              className="rounded-lg p-2 hover:bg-gray-100"
            >
              <X size={22} />
            </button>

          </div>

        </div>

        {/* Search */}

        <div className="border-b border-gray-200 p-7">

          <div className="relative">

            <Search
              size={18}
              className="absolute left-4 top-3.5 text-gray-400"
            />

            <input
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search repositories..."
              className="w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 outline-none focus:border-black"
            />

          </div>

        </div>

        {/* Repository List */}

        <div className="flex-1 space-y-4 overflow-y-auto p-7">

          {isLoading && (
            <p className="py-10 text-center text-gray-500">
              Loading repositories...
            </p>
          )}

          {error && (
            <p className="py-10 text-center text-red-500">
              Failed to load repositories.
            </p>
          )}

          {!isLoading &&
            filteredRepositories.map((repo) => (
              <RepositoryItem
                key={repo.id}
                repository={repo}
                connected={connectedNames.has(
                  repo.full_name
                )}
              />
            ))}

        </div>

        {/* Info */}

        <div className="border-t border-gray-200 bg-gray-50 px-7 pt-5">

          <div className="flex gap-3 rounded-xl border border-blue-100 bg-blue-50 p-4">

            <Info
              size={20}
              className="mt-0.5 text-blue-600"
            />

            <p className="text-sm text-blue-700">
              After connecting a repository,
              RepoPilot automatically creates a
              GitHub webhook and starts monitoring
              events immediately.
            </p>

          </div>

        </div>

        {/* Footer */}

        <div className="flex items-center justify-between border-t border-gray-200 bg-gray-50 px-7 py-5">

          <button className="text-sm font-semibold text-gray-500 hover:text-black">
            How it works
          </button>

          <div className="flex gap-3">

            <button
              onClick={onClose}
              className="rounded-xl border border-gray-300 px-5 py-2 font-semibold hover:bg-gray-100"
            >
              Close
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ConnectRepositoryModal;