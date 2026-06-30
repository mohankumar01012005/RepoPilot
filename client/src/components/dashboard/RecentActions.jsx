import {
  CheckCircle2,
  XCircle,
  Tag,
  MessageSquare,
  Bell,
  Clock3,
} from "lucide-react";

const actions = [
  {
    id: 1,
    actionType: "ADD_LABEL",
    details: "Added 'bug' label to Issue #24",
    status: "SUCCESS",
    time: "2 min ago",
    icon: <Tag size={18} />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    actionType: "ADD_COMMENT",
    details: "Posted welcome comment",
    status: "SUCCESS",
    time: "3 min ago",
    icon: <MessageSquare size={18} />,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 3,
    actionType: "SLACK_NOTIFICATION",
    details: "Slack notification delivered",
    status: "SUCCESS",
    time: "5 min ago",
    icon: <Bell size={18} />,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 4,
    actionType: "ADD_LABEL",
    details: "Repository not found",
    status: "FAILED",
    time: "12 min ago",
    icon: <Tag size={18} />,
    color: "bg-red-100 text-red-600",
  },
];

function RecentActions() {
  return (
    <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold">
            Recent Actions
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Automation actions executed by RepoPilot.
          </p>

        </div>

        <button className="rounded-lg border border-gray-200 px-4 py-2 text-sm hover:bg-gray-100">
          View All
        </button>

      </div>

      <div className="space-y-4">

        {actions.map((action) => (
          <div
            key={action.id}
            className="flex items-center justify-between rounded-xl border border-gray-100 p-5 transition hover:bg-gray-50"
          >

            <div className="flex items-center gap-4">

              <div
                className={`rounded-xl p-3 ${action.color}`}
              >
                {action.icon}
              </div>

              <div>

                <h3 className="font-semibold">
                  {action.actionType}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {action.details}
                </p>

              </div>

            </div>

            <div className="flex items-center gap-6">

              {action.status === "SUCCESS" ? (
                <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">

                  <CheckCircle2 size={16} />

                  SUCCESS

                </span>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700">

                  <XCircle size={16} />

                  FAILED

                </span>
              )}

              <div className="flex items-center gap-2 text-sm text-gray-500">

                <Clock3 size={15} />

                {action.time}

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default RecentActions;