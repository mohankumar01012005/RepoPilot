import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import StatsCards from "../components/dashboard/StatsCards";
import AISummary from "../components/dashboard/AISummary";
import RepositoryTable from "../components/dashboard/RepositoryTable";
import RulesPanel from "../components/dashboard/RulesPanel";
import RecentEvents from "../components/dashboard/RecentEvents";
import RecentActions from "../components/dashboard/RecentActions";

function Dashboard() {
  return (
    <div className="bg-[#f8fafc]">
      <Sidebar />

      <Topbar />

      <main className="min-h-screen p-8 md:ml-64">
        <div className="mb-8">
          <h1 className="text-4xl font-black">
            Dashboard
          </h1>

          <p className="mt-2 text-gray-500">
            Welcome back! Here's an overview of your GitHub automation platform.
          </p>
        </div>

        <StatsCards />

        <AISummary />

        <RepositoryTable />

        <RulesPanel />

        <RecentEvents />

        <RecentActions />
      </main>
    </div>
  );
}

export default Dashboard;