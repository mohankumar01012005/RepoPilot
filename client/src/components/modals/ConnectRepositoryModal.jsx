import {
  Search,
  X,
  Info,
} from "lucide-react";

import RepositoryItem from "./RepositoryItem";

const repositories = [
  {
    name: "RepoPilot",
    private: false,
    updated: "2 hours ago",
    connected: true,
  },
  {
    name: "CareerCraft",
    private: true,
    updated: "1 day ago",
  },
  {
    name: "CloudSave",
    private: true,
    updated: "3 days ago",
  },
  {
    name: "Fitmas",
    private: false,
    updated: "1 week ago",
  },
];

function ConnectRepositoryModal({
  open,
  onClose,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-5">

      <div className="w-full max-w-2xl rounded-3xl bg-white shadow-2xl">

        <div className="border-b border-gray-200 p-7">

          <div className="flex items-start justify-between">

            <div>

              <h2 className="text-3xl font-black">
                Connect Repository
              </h2>

              <p className="mt-2 text-gray-500">
                Select a GitHub repository to
                automate.
              </p>

            </div>

            <button
              onClick={onClose}
              className="rounded-lg p-2 hover:bg-gray-100"
            >
              <X size={22} />
            </button>

          </div>

          <div className="mt-6 flex items-center gap-3">

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
              1
            </div>

            <div className="h-[2px] flex-1 bg-gray-200"></div>

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-sm font-bold">
              2
            </div>

          </div>

        </div>

        <div className="space-y-6 p-7">

          <div className="relative">

            <Search
              size={18}
              className="absolute left-4 top-3.5 text-gray-400"
            />

            <input
              placeholder="Search repositories..."
              className="w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 outline-none focus:border-black"
            />

          </div>

          <div className="max-h-[350px] space-y-4 overflow-y-auto pr-2">

            {repositories.map((repo) => (
              <RepositoryItem
                key={repo.name}
                repository={repo}
                connected={repo.connected}
              />
            ))}

          </div>

          <div className="flex gap-3 rounded-xl border border-blue-100 bg-blue-50 p-4">

            <Info
              size={20}
              className="mt-0.5 text-blue-600"
            />

            <p className="text-sm text-blue-700">
              Can't find your repository?
              Ensure RepoPilot has permission
              to access it from your GitHub
              account settings.
            </p>

          </div>

        </div>

        <div className="flex items-center justify-between rounded-b-3xl border-t border-gray-200 bg-gray-50 px-7 py-5">

          <button className="text-sm font-semibold text-gray-500 hover:text-black">
            How it works
          </button>

          <div className="flex gap-3">

            <button
              onClick={onClose}
              className="rounded-xl border border-gray-300 px-5 py-2 font-semibold"
            >
              Cancel
            </button>

            <button
              disabled
              className="cursor-not-allowed rounded-xl bg-black px-6 py-2 font-semibold text-white opacity-40"
            >
              Next
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ConnectRepositoryModal;