import ActivityRow from "./ActivityRow";
import { useDashboardActions } from "../../hooks/useDashboard";

function ActivityTable() {
  const {
    data: activities,
    isLoading,
    error,
  } = useDashboardActions();

  if (isLoading) {
    return (
      <section className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <p className="text-center text-gray-500">
          Loading activities...
        </p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="rounded-2xl border border-red-200 bg-white p-8 shadow-sm">
        <p className="text-center text-red-500">
          Failed to load activities.
        </p>
      </section>
    );
  }

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
                Action
              </th>

              <th className="px-6 py-4 text-left">
                Details
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

            {activities?.map((activity) => (
              <ActivityRow
                key={activity._id}
                activity={activity}
              />
            ))}

          </tbody>

        </table>

      </div>

      <div className="flex items-center justify-between border-t border-gray-200 px-6 py-5">

        <p className="text-sm text-gray-500">
          Showing {activities?.length ?? 0} activities
        </p>

      </div>

    </section>
  );
}

export default ActivityTable;