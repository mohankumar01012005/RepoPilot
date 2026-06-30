import {
  ArrowUpRight,
  Bot,
  FolderGit2,
  Sparkles,
  Activity,
  CheckCircle2,
} from "lucide-react";

function ImageSection() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              🚀 Intelligent Automation
            </span>

            <h2 className="mt-8 text-5xl font-black leading-tight text-gray-900">
              Built for developers who
              <br />
              love automation.
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              RepoPilot watches every GitHub event and automatically
              performs actions such as adding labels, posting comments,
              sending Slack notifications and preparing AI powered summaries.
            </p>

            <div className="mt-10 space-y-5">

              <Feature
                icon={<CheckCircle2 size={20} />}
                text="Automatic Issue Labeling"
              />

              <Feature
                icon={<Sparkles size={20} />}
                text="AI Generated Issue Summary"
              />

              <Feature
                icon={<Activity size={20} />}
                text="Real Time Activity Feed"
              />

              <Feature
                icon={<Bot size={20} />}
                text="Smart Workflow Automation"
              />

            </div>

            <button
              className="
              mt-12
              inline-flex
              items-center
              gap-3
              rounded-xl
              bg-black
              px-6
              py-4
              text-white
              transition
              hover:scale-105
              "
            >
              Explore Dashboard

              <ArrowUpRight size={18} />
            </button>

          </div>

          {/* Right */}

          <div
            className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-gray-200
            bg-gradient-to-br
            from-slate-900
            via-slate-800
            to-black
            p-10
            text-white
            shadow-2xl
            "
          >

            <div className="mb-8 flex items-center justify-between">

              <div>

                <p className="text-gray-400">
                  Connected Repository
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  RepoPilot
                </h3>

              </div>

              <FolderGit2 size={42} />

            </div>

            <div className="space-y-5">

              <StatusCard
                title="Webhook Active"
                value="Online"
              />

              <StatusCard
                title="Automations"
                value="18 Running"
              />

              <StatusCard
                title="Events Today"
                value="154"
              />

              <StatusCard
                title="Slack Notifications"
                value="31 Sent"
              />

            </div>

            <div
              className="
              absolute
              -bottom-16
              -right-16
              h-52
              w-52
              rounded-full
              bg-blue-500/30
              blur-3xl
              "
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default ImageSection;

function Feature({ icon, text }) {
  return (
    <div className="flex items-center gap-4">

      <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
        {icon}
      </div>

      <span className="text-lg font-medium">
        {text}
      </span>

    </div>
  );
}

function StatusCard({ title, value }) {
  return (
    <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">

      <p className="text-sm text-gray-400">
        {title}
      </p>

      <h4 className="mt-2 text-2xl font-bold">
        {value}
      </h4>

    </div>
  );
}