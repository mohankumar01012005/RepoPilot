import {
  Activity,
  Bell,
  Bot,
  CheckCircle2,
  FolderGit2,
  GitBranch,
  Settings,
  // Slack,
  Sparkles,
} from "lucide-react";

function DashboardPreview() {
  return (
    <section
      id="documentation"
      className="relative px-6 pb-28"
    >
      <div className="mx-auto max-w-7xl">

        <div
          className="
          overflow-hidden
          rounded-3xl
          border
          border-gray-200
          bg-white/70
          shadow-2xl
          backdrop-blur-xl
          "
        >

          {/* Browser Header */}

          <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-6 py-4">

            <div className="flex items-center gap-2">

              <div className="h-3 w-3 rounded-full bg-red-400"></div>

              <div className="h-3 w-3 rounded-full bg-yellow-400"></div>

              <div className="h-3 w-3 rounded-full bg-green-400"></div>

            </div>

            <div
              className="
              rounded-lg
              border
              border-gray-200
              bg-white
              px-6
              py-2
              text-sm
              text-gray-500
              "
            >
              https://app.repopilot.dev/dashboard
            </div>

            <GitBranch
  size={20}
  className="text-gray-600"
/>
          </div>

          {/* Main */}

          <div className="grid lg:grid-cols-12">

            {/* Sidebar */}

            <aside
              className="
              hidden
              lg:flex
              lg:col-span-3
              flex-col
              border-r
              border-gray-200
              bg-white
              p-6
              "
            >

              <h2 className="mb-8 text-2xl font-black">
                RepoPilot
              </h2>

              <nav className="space-y-3">

                {/* <SidebarItem
                  icon={<LayoutDashboard size={18} />}
                  text="Dashboard"
                  active
                /> */}

                <SidebarItem
                  icon={<FolderGit2 size={18} />}
                  text="Repositories"
                />

                <SidebarItem
                  icon={<Activity size={18} />}
                  text="Events"
                />

                <SidebarItem
                  icon={<Bot size={18} />}
                  text="Automation"
                />

                <SidebarItem
                  icon={<Settings size={18} />}
                  text="Settings"
                />

              </nav>

            </aside>

            {/* Content */}

            <main className="lg:col-span-9 p-8">

              {/* Top Cards */}

              <div className="grid gap-5 md:grid-cols-4">

                <StatCard
                  title="Repositories"
                  value="12"
                  icon={<FolderGit2 />}
                />

                <StatCard
                  title="Events"
                  value="154"
                  icon={<Activity />}
                />

                <StatCard
                  title="Success"
                  value="99.4%"
                  icon={<CheckCircle2 />}
                />

                {/* <StatCard
                  title="Slack Alerts"
                  value="31"
                  icon={<Slack />}
                /> */}

              </div>

              {/* AI Summary */}

              <div
                className="
                mt-8
                rounded-2xl
                border
                border-blue-200
                bg-gradient-to-r
                from-blue-50
                to-white
                p-6
                "
              >

                <div className="flex items-center gap-3">

                  <div
                    className="
                    rounded-xl
                    bg-black
                    p-3
                    text-white
                    "
                  >
                    <Sparkles size={20} />
                  </div>

                  <div>

                    <h3 className="font-bold">
                      AI Workflow Summary
                    </h3>

                    <p className="mt-1 text-sm text-gray-600">

                      RepoPilot analysed today's activity and
                      detected 3 new issues, 2 pull requests
                      and all automations executed successfully.

                    </p>

                  </div>

                </div>

              </div>

              {/* Bottom */}

              <div className="mt-8 grid gap-6 lg:grid-cols-2">

                {/* Activity */}

                <div
                  className="
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  p-6
                  "
                >

                  <h3 className="mb-5 text-lg font-bold">
                    Recent Activity
                  </h3>

                  <div className="space-y-4">

                    <ActivityItem
                      color="bg-green-500"
                      title="Bug label added"
                    />

                    {/* <ActivityItem
                      color="bg-blue-500"
                      title="Slack notification sent"
                    /> */}

                    <ActivityItem
                      color="bg-purple-500"
                      title="Issue comment posted"
                    />

                    <ActivityItem
                      color="bg-orange-500"
                      title="Pull request detected"
                    />

                  </div>

                </div>

                {/* Repository */}

                <div
                  className="
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  p-6
                  "
                >

                  <h3 className="mb-5 text-lg font-bold">
                    Connected Repositories
                  </h3>

                  <RepositoryItem
                    name="RepoPilot"
                    status="Active"
                  />

                  <RepositoryItem
                    name="AeroFlow"
                    status="Active"
                  />

                  <RepositoryItem
                    name="CareerCraft"
                    status="Paused"
                  />

                  <RepositoryItem
                    name="CloudSave"
                    status="Active"
                  />

                </div>

              </div>

            </main>

          </div>

        </div>

      </div>
    </section>
  );
}

export default DashboardPreview;

/* ---------- Components ---------- */

function SidebarItem({
  icon,
  text,
  active = false,
}) {
  return (
    <div
      className={`flex cursor-pointer items-center gap-3 rounded-xl px-4 py-3 transition ${
        active
          ? "bg-black text-white"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      {icon}
      <span>{text}</span>
    </div>
  );
}

function StatCard({
  title,
  value,
  icon,
}) {
  return (
    <div
      className="
      rounded-2xl
      border
      border-gray-200
      bg-white
      p-5
      shadow-sm
      "
    >
      <div className="mb-5 flex items-center justify-between">

        <div className="text-gray-500">
          {icon}
        </div>

        <GitBranch
          size={16}
          className="text-gray-400"
        />

      </div>

      <h2 className="text-3xl font-black">
        {value}
      </h2>

      <p className="mt-2 text-sm text-gray-500">
        {title}
      </p>

    </div>
  );
}

function ActivityItem({
  color,
  title,
}) {
  return (
    <div className="flex items-center gap-4">

      <div
        className={`h-3 w-3 rounded-full ${color}`}
      />

      <span className="font-medium">
        {title}
      </span>

    </div>
  );
}

function RepositoryItem({
  name,
  status,
}) {
  return (
    <div
      className="
      mb-4
      flex
      items-center
      justify-between
      rounded-xl
      border
      border-gray-100
      p-4
      "
    >

      <div className="flex items-center gap-3">

        <FolderGit2 size={20} />

        <span className="font-medium">
          {name}
        </span>

      </div>

      <div className="flex items-center gap-2">

        <Bell
          size={15}
          className="text-green-500"
        />

        <span className="text-sm text-gray-500">
          {status}
        </span>

      </div>

    </div>
  );
}