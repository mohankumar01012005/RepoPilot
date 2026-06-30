import {
  Workflow,
  GitPullRequest,
  AlertCircle,
  GitCommit,
  Clock3,
} from "lucide-react";
import { useDashboardEvents } from "../../hooks/useDashboard";
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
  const {
  data: events,
  isLoading,
  error,
} = useDashboardEvents();
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

       {events?.map((event) => (
  <div
    key={event._id}
    className="flex items-center justify-between rounded-xl border border-gray-100 p-4 hover:bg-gray-50"
  >
    <div>
      <h3 className="font-semibold">
        {event.githubEvent}
      </h3>

      <p className="text-sm text-gray-500">
        {event.action}
      </p>

      <p className="mt-1 text-xs text-gray-400">
        {new Date(event.createdAt).toLocaleString()}
      </p>
    </div>

    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        event.processed
          ? "bg-green-100 text-green-700"
          : "bg-yellow-100 text-yellow-700"
      }`}
    >
      {event.processed ? "Processed" : "Pending"}
    </span>
  </div>
))}

      </div>

    </section>
  );
}

export default RecentEvents;