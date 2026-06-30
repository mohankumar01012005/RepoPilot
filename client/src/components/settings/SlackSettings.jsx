import {
  Bell,
  CheckCircle2,
} from "lucide-react";

function SlackSettings() {
  const configured =
    true;

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100">

            <Bell size={22} />

          </div>

          <div>

            <h2 className="text-2xl font-bold">
              Slack Integration
            </h2>

            <p className="mt-1 text-gray-500">
              Automation notifications
            </p>

          </div>

        </div>

        {configured ? (
          <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">

            <CheckCircle2 size={16} />

            Connected

          </span>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 font-semibold text-red-700">

            Not Configured

          </span>
        )}

      </div>

      <div className="mt-8 rounded-xl bg-gray-50 p-5">

        <p className="text-gray-600">

          RepoPilot automatically sends webhook
          notifications to your configured Slack
          channel whenever automation rules are
          executed successfully.

        </p>

      </div>

    </section>
  );
}

export default SlackSettings;