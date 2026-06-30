import {
  Tag,
  Shield,
  Clock3,
  GitCommit,
  AlertCircle,
  Edit3,
  MoreVertical,
} from "lucide-react";
import { useState } from "react";

const ICONS = {
  bug: Tag,
  security: Shield,
  schedule: Clock3,
};

function RuleCard({ rule }) {
  const [enabled, setEnabled] = useState(rule.enabled);

  const Icon = ICONS[rule.icon];

  return (
    <div
      className={`rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl ${
        enabled ? "" : "opacity-70 grayscale"
      }`}
    >
      <div className="flex items-start justify-between">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100">
            <Icon size={22} />
          </div>

          <div>

            <h3 className="text-xl font-bold">
              {rule.title}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              ID : {rule.id}
            </p>

          </div>

        </div>

        <div className="flex items-center gap-3">

          <button
            onClick={() =>
              setEnabled(!enabled)
            }
            className={`relative h-7 w-14 rounded-full transition ${
              enabled
                ? "bg-black"
                : "bg-gray-300"
            }`}
          >
            <span
              className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
                enabled
                  ? "left-8"
                  : "left-1"
              }`}
            />
          </button>

          <span
            className={`text-sm font-semibold ${
              enabled
                ? "text-green-600"
                : "text-gray-500"
            }`}
          >
            {enabled
              ? "ACTIVE"
              : "INACTIVE"}
          </span>

        </div>

      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-2">

        <div>

          <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
            Trigger
          </h4>

          <div className="flex items-center gap-3">

            <AlertCircle
              size={18}
              className="text-blue-600"
            />

            <span className="font-medium">
              {rule.trigger}
            </span>

          </div>

        </div>

        <div>

          <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
            Actions
          </h4>

          <div className="flex flex-wrap gap-2">

            {rule.actions.map((action) => (
              <span
                key={action}
                className="rounded-lg bg-gray-100 px-3 py-2 text-sm"
              >
                {action}
              </span>
            ))}

          </div>

        </div>

      </div>

      <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-5">

        <div className="flex items-center gap-2 text-sm text-gray-500">

          <GitCommit size={16} />

          Last Run : {rule.lastRun}

        </div>

        <div className="flex gap-2">

          <button className="rounded-lg p-2 hover:bg-gray-100">

            <Edit3 size={18} />

          </button>

          <button className="rounded-lg p-2 hover:bg-gray-100">

            <MoreVertical size={18} />

          </button>

        </div>

      </div>

    </div>
  );
}

export default RuleCard;