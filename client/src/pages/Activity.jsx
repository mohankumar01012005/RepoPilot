import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

import ActivityToolbar from "../components/activity/ActivityToolbar";
import ActivityTable from "../components/activity/ActivityTable";

function Activity() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Sidebar />

      <Topbar />

      <main className="md:ml-64">
        <div className="mx-auto max-w-7xl px-8 py-8">

          <div className="mb-8">

            <h1 className="text-4xl font-black">
              Activity
            </h1>

            <p className="mt-2 text-gray-500">
              Monitor GitHub webhook events and automation history.
            </p>

          </div>

          <ActivityToolbar />

          <ActivityTable />

        </div>
      </main>
    </div>
  );
}

export default Activity;