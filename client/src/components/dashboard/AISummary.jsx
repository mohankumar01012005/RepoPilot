import {
  Sparkles,
  Bot,
  CheckCircle2,
  Bell,
  Tag,
  MessageSquare,
  GitPullRequest,
} from "lucide-react";

const activities = [
  {
    icon: <Tag size={18} />,
    title: "Bug label added",
    time: "2 min ago",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: <MessageSquare size={18} />,
    title: "Welcome comment posted",
    time: "5 min ago",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: <Bell size={18} />,
    title: "Slack notification sent",
    time: "8 min ago",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: <GitPullRequest size={18} />,
    title: "Pull Request detected",
    time: "20 min ago",
    color: "bg-purple-100 text-purple-600",
  },
];

function AISummary() {
  return (
    <section className="mt-8 grid gap-6 xl:grid-cols-3">

      {/* AI Summary */}

      <div className="xl:col-span-1 rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-600 to-indigo-700 p-6 text-white shadow-lg">

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

          {activities.map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-between rounded-xl border border-gray-100 p-4 transition hover:bg-gray-50"
            >

              <div className="flex items-center gap-4">

                <div
                  className={`rounded-xl p-3 ${item.color}`}
                >
                  {item.icon}
                </div>

                <div>

                  <h3 className="font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {item.time}
                  </p>

                </div>

              </div>

              <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">

                <CheckCircle2 size={16} />

                Success

              </span>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default AISummary;