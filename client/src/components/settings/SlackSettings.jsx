import { Bell } from "lucide-react";

function SlackSettings() {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100">
          <Bell size={22} />
        </div>

        <h2 className="text-2xl font-bold">
          Slack Webhook
        </h2>

      </div>

      <label className="mb-2 block font-semibold">
        Webhook URL
      </label>

      <input
        type="text"
        placeholder="https://hooks.slack.com/services/..."
        className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-black"
      />

      <p className="mt-3 text-sm text-gray-500">
        RepoPilot will send automation notifications to this Slack channel.
      </p>

      <div className="mt-6 flex justify-end">

        <button className="rounded-xl bg-black px-6 py-3 text-white">
          Save Webhook
        </button>

      </div>

    </section>
  );
}

export default SlackSettings;