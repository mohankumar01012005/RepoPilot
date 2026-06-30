import ActivityRow from "./ActivityRow";

const activities = [
  {
    id: 1,
    event: "Issue Opened",
    repository: "RepoPilot",
    action: "ADD_LABEL",
    status: "SUCCESS",
    time: "2 min ago",
  },
  {
    id: 2,
    event: "Issue Opened",
    repository: "RepoPilot",
    action: "ADD_COMMENT",
    status: "SUCCESS",
    time: "2 min ago",
  },
  {
    id: 3,
    event: "Issue Opened",
    repository: "RepoPilot",
    action: "SLACK_NOTIFICATION",
    status: "SUCCESS",
    time: "3 min ago",
  },
  {
    id: 4,
    event: "Pull Request",
    repository: "AeroFlow",
    action: "ADD_LABEL",
    status: "SUCCESS",
    time: "18 min ago",
  },
  {
    id: 5,
    event: "Push",
    repository: "CareerCraft",
    action: "NO_RULE_MATCHED",
    status: "FAILED",
    time: "41 min ago",
  },
  {
    id: 6,
    event: "Issue Opened",
    repository: "CloudSave",
    action: "ADD_COMMENT",
    status: "SUCCESS",
    time: "1 hour ago",
  },
  {
    id: 7,
    event: "Push",
    repository: "RepoPilot",
    action: "SLACK_NOTIFICATION",
    status: "SUCCESS",
    time: "2 hours ago",
  },
  {
    id: 8,
    event: "Pull Request",
    repository: "AeroFlow",
    action: "ADD_LABEL",
    status: "SUCCESS",
    time: "3 hours ago",
  },
];

function ActivityTable() {
  return (
    <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

      <div className="border-b border-gray-200 px-6 py-5">

        <h2 className="text-2xl font-bold">
          Recent Activity
        </h2>

        <p className="mt-1 text-gray-500">
          Latest webhook executions.
        </p>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-gray-50">

            <tr>

              <th className="px-6 py-4 text-left">
                Event
              </th>

              <th className="px-6 py-4 text-left">
                Action
              </th>

              <th className="px-6 py-4 text-left">
                Status
              </th>

              <th className="px-6 py-4 text-left">
                Time
              </th>

              <th className="px-6 py-4"></th>

            </tr>

          </thead>

          <tbody>

            {activities.map((activity) => (
              <ActivityRow
                key={activity.id}
                activity={activity}
              />
            ))}

          </tbody>

        </table>

      </div>

      <div className="flex items-center justify-between border-t border-gray-200 px-6 py-5">

        <p className="text-sm text-gray-500">
          Showing 8 activities
        </p>

        <div className="flex gap-2">

          <button className="rounded-lg border border-gray-200 px-4 py-2 hover:bg-gray-100">
            Previous
          </button>

          <button className="rounded-lg bg-black px-4 py-2 text-white">
            1
          </button>

          <button className="rounded-lg border border-gray-200 px-4 py-2 hover:bg-gray-100">
            2
          </button>

          <button className="rounded-lg border border-gray-200 px-4 py-2 hover:bg-gray-100">
            Next
          </button>

        </div>

      </div>

    </section>
  );
}

export default ActivityTable;