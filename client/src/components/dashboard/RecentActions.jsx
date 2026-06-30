import {
  Tag,
  MessageSquare,
  Bell,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import { useDashboardActions } from "../../hooks/useDashboard";

function RecentActivity() {
  const {
    data: actions,
    isLoading,
    error,
  } = useDashboardActions();

  const getIcon = (type) => {
    switch (type) {
      case "ADD_LABEL":
        return (
          <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
            <Tag size={18} />
          </div>
        );

      case "ADD_COMMENT":
        return (
          <div className="rounded-xl bg-green-100 p-3 text-green-600">
            <MessageSquare size={18} />
          </div>
        );

      case "SLACK_NOTIFICATION":
        return (
          <div className="rounded-xl bg-purple-100 p-3 text-purple-600">
            <Bell size={18} />
          </div>
        );

      default:
        return (
          <div className="rounded-xl bg-gray-100 p-3 text-gray-600">
            <Bell size={18} />
          </div>
        );
    }
  };

  if (isLoading)
    return (
      <div className="rounded-2xl border border-gray-200 bg-white p-6">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-red-600">
        Failed to load activity.
      </div>
    );

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold">
            Recent Activity
          </h2>

          <p className="text-sm text-gray-500">
            Latest automation activity.
          </p>

        </div>

        <button className="rounded-lg border border-gray-200 px-4 py-2 text-sm hover:bg-gray-100">
          View All
        </button>

      </div>

      <div className="space-y-4">

        {actions?.slice(0, 4).map((action) => (
          <div
            key={action._id}
            className="flex items-center justify-between rounded-xl border border-gray-100 p-4 hover:bg-gray-50"
          >
            <div className="flex items-center gap-4">

              {getIcon(action.actionType)}

              <div>

                <h3 className="font-semibold">
                  {action.details}
                </h3>

                <p className="text-sm text-gray-500">
                  {action.actionType.replaceAll("_", " ")}
                </p>

              </div>

            </div>

            <span
              className={`flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
                action.status === "SUCCESS"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {action.status === "SUCCESS" ? (
                <CheckCircle2 size={14} />
              ) : (
                <XCircle size={14} />
              )}

              {action.status}
            </span>

          </div>
        ))}

      </div>

    </section>
  );
}

export default RecentActivity;