import {
  Workflow,
  CheckCircle2,
  XCircle,
  Clock3,
  ChevronRight,
} from "lucide-react";

function ActivityRow({ activity }) {
  return (
    <tr className="border-b border-gray-100 transition hover:bg-gray-50">

      <td className="px-6 py-5">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-gray-100 p-3">

            <Workflow size={18} />

          </div>

          <div>

            <h3 className="font-semibold">
              {activity.event}
            </h3>

            <p className="text-sm text-gray-500">
              {activity.repository}
            </p>

          </div>

        </div>

      </td>

      <td className="px-6 py-5">

        <span className="rounded-lg bg-blue-100 px-3 py-2 text-sm font-semibold text-blue-700">

          {activity.action}

        </span>

      </td>

      <td className="px-6 py-5">

        {activity.status === "SUCCESS" ? (
          <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-2 text-sm font-semibold text-green-700">

            <CheckCircle2 size={16} />

            SUCCESS

          </span>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-2 text-sm font-semibold text-red-700">

            <XCircle size={16} />

            FAILED

          </span>
        )}

      </td>

      <td className="px-6 py-5">

        <div className="flex items-center gap-2 text-gray-500">

          <Clock3 size={16} />

          {activity.time}

        </div>

      </td>

      <td className="px-6 py-5 text-right">

        <button className="rounded-lg p-2 transition hover:bg-gray-100">

          <ChevronRight size={18} />

        </button>

      </td>

    </tr>
  );
}

export default ActivityRow;