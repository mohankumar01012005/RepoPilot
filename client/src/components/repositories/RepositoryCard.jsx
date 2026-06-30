import {
  FolderGit2,
  MoreHorizontal,
  CheckCircle2,
  AlertTriangle,
  Activity,
  GitBranch,
  ExternalLink,
} from "lucide-react";

function RepositoryCard({ repository }) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Header */}

      <div className="mb-6 flex items-start justify-between">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-blue-50">
            <FolderGit2
              size={26}
              className="text-blue-600"
            />
          </div>

          <div>

            <h3 className="text-xl font-bold group-hover:underline">
              {repository.name}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              {repository.fullName}
            </p>

          </div>

        </div>

        <button className="rounded-lg p-2 hover:bg-gray-100">
          <MoreHorizontal size={20} />
        </button>

      </div>

      {/* Information */}

      <div className="space-y-4">

        {/* Webhook */}

        <div className="flex items-center justify-between border-b border-gray-100 pb-3">

          <div className="flex items-center gap-2">

            {repository.webhookId ? (
              <CheckCircle2
                size={18}
                className="text-green-600"
              />
            ) : (
              <AlertTriangle
                size={18}
                className="text-red-600"
              />
            )}

            <span className="text-gray-600">
              Webhook
            </span>

          </div>

          <span
            className={`font-semibold ${
              repository.webhookId
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {repository.webhookId
              ? "Configured"
              : "Missing"}
          </span>

        </div>

        {/* Branch */}

        <div className="flex items-center justify-between border-b border-gray-100 pb-3">

          <div className="flex items-center gap-2">

            <GitBranch
              size={18}
              className="text-gray-600"
            />

            <span className="text-gray-600">
              Branch
            </span>

          </div>

          <span className="font-semibold">
            {repository.defaultBranch}
          </span>

        </div>

        {/* Events */}

        <div className="flex items-center justify-between border-b border-gray-100 pb-3">

          <span className="text-gray-600">
            Events Received
          </span>

          <span className="font-semibold">
            {repository.events}
          </span>

        </div>

        {/* Actions */}

        <div className="flex items-center justify-between border-b border-gray-100 pb-3">

          <span className="text-gray-600">
            Actions Executed
          </span>

          <span className="font-semibold">
            {repository.actions}
          </span>

        </div>

      </div>

      {/* Footer */}

      <div className="mt-6 flex items-center justify-between">

        <span
          className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ${
            repository.isActive
              ? "bg-green-100 text-green-700"
              : "bg-orange-100 text-orange-700"
          }`}
        >
          <Activity size={16} />

          {repository.isActive
            ? "Active"
            : "Paused"}

        </span>

        <a
          href={`https://github.com/${repository.fullName}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold transition hover:bg-gray-100"
        >
          Open Repo

          <ExternalLink size={16} />
        </a>

      </div>

    </div>
  );
}

export default RepositoryCard;