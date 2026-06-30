import {
  Workflow,
  GitPullRequest,
  AlertCircle,
  GitCommit,
  Clock3,
} from "lucide-react";

const events = [
  {
    id: 1,
    event: "Issue Opened",
    repository: "RepoPilot",
    status: "Processed",
    time: "2 min ago",
    icon: <AlertCircle size={18} />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    event: "Pull Request Opened",
    repository: "AeroFlow",
    status: "Processed",
    time: "10 min ago",
    icon: <GitPullRequest size={18} />,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 3,
    event: "Push Event",
    repository: "CareerCraft",
    status: "Processed",
    time: "22 min ago",
    icon: <GitCommit size={18} />,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 4,
    event: "Issue Opened",
    repository: "CloudSave",
    status: "Processed",
    time: "40 min ago",
    icon: <AlertCircle size={18} />,
    color: "bg-orange-100 text-orange-600",
  },
];

function RecentEvents() {
  return (
    <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold">
            Recent Webhook Events
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Latest GitHub events received by RepoPilot.
          </p>

        </div>

        <button className="rounded-lg border border-gray-200 px-4 py-2 text-sm hover:bg-gray-100">
          View All
        </button>

      </div>

      <div className="space-y-5">

        {events.map((event) => (
          <div
            key={event.id}
            className="flex items-center justify-between rounded-xl border border-gray-100 p-5 transition hover:bg-gray-50"
          >

            <div className="flex items-center gap-4">

              <div
                className={`rounded-xl p-3 ${event.color}`}
              >
                {event.icon}
              </div>

              <div>

                <h3 className="font-semibold">
                  {event.event}
                </h3>

                <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">

                  <Workflow size={14} />

                  {event.repository}

                </div>

              </div>

            </div>

            <div className="flex items-center gap-8">

              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                {event.status}
              </span>

              <div className="flex items-center gap-2 text-sm text-gray-500">

                <Clock3 size={15} />

                {event.time}

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default RecentEvents;