import {
  FolderGit2,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { useState } from "react";

function RepositoryItem({
  repository,
  connected = false,
}) {
  const [loading, setLoading] =
    useState(false);

  const [isConnected, setIsConnected] =
    useState(connected);

  const connectRepo = () => {
    if (isConnected) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsConnected(true);
    }, 1200);
  };

  return (
    <div
      className={`flex items-center justify-between rounded-xl border p-4 transition ${
        isConnected
          ? "border-green-200 bg-green-50"
          : "border-gray-200 bg-white hover:border-black hover:shadow-sm"
      }`}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100">
          <FolderGit2 size={22} />
        </div>

        <div>
          <div className="flex items-center gap-3">
            <h3 className="font-semibold">
              {repository.name}
            </h3>

            <span
              className={`rounded-full px-2 py-1 text-xs font-semibold ${
                repository.private
                  ? "bg-gray-200 text-gray-700"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              {repository.private
                ? "Private"
                : "Public"}
            </span>
          </div>

          <p className="mt-1 text-sm text-gray-500">
            Updated {repository.updated}
          </p>
        </div>
      </div>

      {isConnected ? (
        <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
          <CheckCircle2 size={16} />
          Connected
        </span>
      ) : (
        <button
          onClick={connectRepo}
          className="rounded-lg bg-black px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
        >
          {loading ? (
            <Loader2
              size={18}
              className="animate-spin"
            />
          ) : (
            "Connect"
          )}
        </button>
      )}
    </div>
  );
}

export default RepositoryItem;