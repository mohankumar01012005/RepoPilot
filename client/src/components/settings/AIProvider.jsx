import {
  Brain,
  Sparkles,
} from "lucide-react";

function AIProvider() {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100">

          <Brain size={22} />

        </div>

        <h2 className="text-2xl font-bold">
          AI Features
        </h2>

      </div>

      <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-6">

        <div className="flex items-center gap-3">

          <Sparkles
            size={20}
            className="text-blue-600"
          />

          <h3 className="font-bold">
            Not Configured
          </h3>

        </div>

        <p className="mt-4 leading-7 text-gray-600">

          RepoPilot currently focuses on GitHub
          automation using webhooks.

          AI-powered issue summarization,
          automatic labeling and intelligent
          prioritization are planned for future
          versions.

        </p>

      </div>

    </section>
  );
}

export default AIProvider;