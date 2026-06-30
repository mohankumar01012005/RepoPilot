import {
  Code2,
  Terminal,
  Database,
  MoreHorizontal,
  CheckCircle2,
  AlertTriangle,
  Users,
  ArrowRight,
  Settings,
} from "lucide-react";

const ICONS = {
  code: Code2,
  terminal: Terminal,
  database: Database,
};

function RepositoryCard({ repository }) {
  const Icon = ICONS[repository.icon];

  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="mb-6 flex items-start justify-between">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-gray-100">
            <Icon size={26} />
          </div>

          <div>

            <h3 className="text-xl font-bold group-hover:underline">
              {repository.name}
            </h3>

            <div className="mt-2 flex items-center gap-3">

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  repository.private
                    ? "bg-gray-200 text-gray-700"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {repository.private ? "Private" : "Public"}
              </span>

              <span className="text-sm text-gray-500">
                Updated {repository.updated}
              </span>

            </div>

          </div>

        </div>

        <button className="rounded-lg p-2 hover:bg-gray-100">
          <MoreHorizontal size={20} />
        </button>

      </div>

      <div className="space-y-4">

        <div className="flex items-center justify-between border-b border-gray-100 pb-3">

          <div className="flex items-center gap-2">

            {repository.healthy ? (
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
              repository.healthy
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {repository.webhook}
          </span>

        </div>

        <div className="flex items-center justify-between border-b border-gray-100 pb-3">

          <span className="text-gray-600">
            Automation Rules
          </span>

          <span className="font-semibold">
            {repository.rules}
          </span>

        </div>

      </div>

      <div className="mt-6 flex items-center">

        <div className="flex items-center gap-2">

          <Users
            size={18}
            className="text-gray-500"
          />

          <span className="text-sm text-gray-500">
            {repository.members}
          </span>

        </div>

        <div className="ml-auto">

          {repository.healthy ? (
            <button className="flex items-center gap-2 text-sm font-semibold hover:underline">

              View Logs

              <ArrowRight size={16} />

            </button>
          ) : (
            <button className="flex items-center gap-2 rounded-lg bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">

              <Settings size={16} />

              Fix Webhook

            </button>
          )}

        </div>

      </div>

    </div>
  );
}

export default RepositoryCard;