import {
  Plus,
  Pencil,
  Trash2,
  CircleCheckBig,
  CircleOff,
  Bug,
  Bell,
  MessageSquare,
} from "lucide-react";

const rules = [
  {
    id: 1,
    name: "Bug Label Automation",
    trigger: "Issue Opened",
    action: "Add 'bug' Label",
    enabled: true,
    icon: <Bug size={18} />,
  },
  {
    id: 2,
    name: "Slack Notification",
    trigger: "Pull Request Opened",
    action: "Notify Slack",
    enabled: true,
    icon: <Bell size={18} />,
  },
  {
    id: 3,
    name: "Welcome Comment",
    trigger: "Issue Opened",
    action: "Post Comment",
    enabled: false,
    icon: <MessageSquare size={18} />,
  },
];

function RulesPanel() {
  return (
    <section className="mt-8 grid gap-6 xl:grid-cols-3">

      {/* Left */}

      <div className="xl:col-span-2 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

        <div className="mb-6 flex items-center justify-between">

          <div>

            <h2 className="text-2xl font-bold">
              Automation Rules
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Manage your GitHub automation workflows.
            </p>

          </div>

          <button className="flex items-center gap-2 rounded-xl bg-black px-5 py-3 text-white transition hover:opacity-90">

            <Plus size={18} />

            Create Rule

          </button>

        </div>

        <div className="space-y-5">

          {rules.map((rule) => (
            <div
              key={rule.id}
              className="rounded-xl border border-gray-200 p-5 transition hover:border-black"
            >

              <div className="flex items-start justify-between">

                <div className="flex items-center gap-4">

                  <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                    {rule.icon}
                  </div>

                  <div>

                    <h3 className="text-lg font-semibold">
                      {rule.name}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Trigger:
                      {" "}
                      {rule.trigger}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Action:
                      {" "}
                      {rule.action}
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-3">

                  <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
                    <Pencil size={18} />
                  </button>

                  <button className="rounded-lg border border-gray-200 p-2 hover:bg-red-50">
                    <Trash2 size={18} />
                  </button>

                </div>

              </div>

              <div className="mt-5">

                {rule.enabled ? (
                  <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">

                    <CircleCheckBig size={16} />

                    Enabled

                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700">

                    <CircleOff size={16} />

                    Disabled

                  </span>
                )}

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* Right */}

      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

        <h2 className="text-xl font-bold">
          Rule Statistics
        </h2>

        <div className="mt-8 space-y-5">

          <Stat
            title="Total Rules"
            value="12"
          />

          <Stat
            title="Enabled"
            value="10"
          />

          <Stat
            title="Disabled"
            value="2"
          />

          <Stat
            title="Executed Today"
            value="154"
          />

          <Stat
            title="Success Rate"
            value="99.4%"
          />

        </div>

      </div>

    </section>
  );
}

export default RulesPanel;

function Stat({ title, value }) {
  return (
    <div className="rounded-xl bg-gray-50 p-4">

      <p className="text-sm text-gray-500">
        {title}
      </p>

      <h3 className="mt-2 text-3xl font-black">
        {value}
      </h3>

    </div>
  );
}