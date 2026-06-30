import {
  Sparkles,
  Bot,
  CheckCircle2,
  Bell,
  Tag,
  MessageSquare,
  GitPullRequest,
} from "lucide-react";
import {
  useDashboardActions,
} from "../../hooks/useDashboard";


function AISummary() {
  const {
  data: actions,
  isLoading,
} = useDashboardActions();

const getIcon = (type) => {
  switch (type) {
    case "ADD_LABEL":
      return (
        <Tag
          size={18}
          className="text-blue-600"
        />
      );

    case "ADD_COMMENT":
      return (
        <MessageSquare
          size={18}
          className="text-green-600"
        />
      );

    case "SLACK_NOTIFICATION":
      return (
        <Bell
          size={18}
          className="text-orange-600"
        />
      );

    case "PULL_REQUEST":
      return (
        <GitPullRequest
          size={18}
          className="text-purple-600"
        />
      );

    default:
      return (
        <Sparkles
          size={18}
          className="text-gray-600"
        />
      );
  }
};
  return (
    <section className="mt-8 grid gap-6 xl:grid-cols-3">

      {/* AI Summary */}

      <div className="xl:col-span-1 rounded-2xl border border-blue-200 bg-linear-to-br from-blue-600 to-indigo-700 p-6 text-white shadow-lg">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-white/20 p-3">
            <Sparkles size={24} />
          </div>

          <div>
            <h2 className="text-xl font-bold">
              AI Summary
            </h2>

            <p className="text-sm text-blue-100">
              RepoPilot Assistant
            </p>
          </div>

        </div>

        <div className="mt-8 rounded-xl bg-white/10 p-5 backdrop-blur">

          <div className="flex items-center gap-3">

            <Bot size={22} />

            <p className="font-semibold">
              Daily Automation Report
            </p>

          </div>

          <ul className="mt-5 space-y-4 text-sm leading-7">

            <li>
              ✅ 154 GitHub events processed successfully.
            </li>

            <li>
              ✅ 31 Slack notifications delivered.
            </li>

            <li>
              ✅ 12 repositories synchronized.
            </li>

            <li>
              ✅ No failed automations detected.
            </li>

          </ul>

        </div>

      </div>

      {/* Recent Activity */}

      <div className="xl:col-span-2 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

        <div className="mb-6 flex items-center justify-between">

          <div>

            <h2 className="text-2xl font-bold">
              Recent Activity
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Latest automation events.
            </p>

          </div>

          <button className="rounded-lg border border-gray-200 px-4 py-2 text-sm hover:bg-gray-100">
            View All
          </button>

        </div>

        <div className="space-y-5">

          {actions?.slice(0, 4).map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between rounded-xl border border-gray-100 p-4 transition hover:bg-gray-50"
            >

              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-gray-100 p-3">
  {getIcon(item.actionType)}
</div>

                <div>

                  <h3 className="font-semibold">
                    {item.details}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {item.actionType.replaceAll("_", " ")}
                  </p>

                </div>

              </div>

             <span
                className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ${
                  item.status === "SUCCESS"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                <CheckCircle2 size={16} />
                {item.status}
              </span>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default AISummary;