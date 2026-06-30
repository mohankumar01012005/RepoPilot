import { Brain } from "lucide-react";

function AIProvider() {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100">
          <Brain size={22} />
        </div>

        <h2 className="text-2xl font-bold">
          AI Provider
        </h2>

      </div>

      <div className="grid gap-4 md:grid-cols-2">

        <label className="cursor-pointer rounded-xl border-2 border-black p-5">

          <input
            defaultChecked
            type="radio"
            name="provider"
            className="hidden"
          />

          <h3 className="font-bold">
            OpenAI
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            GPT-4o / GPT-4.1
          </p>

        </label>

        <label className="cursor-pointer rounded-xl border border-gray-200 p-5">

          <input
            type="radio"
            name="provider"
            className="hidden"
          />

          <h3 className="font-bold">
            Anthropic
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Claude Sonnet
          </p>

        </label>

      </div>

      <div className="mt-6">

        <label className="mb-2 block font-semibold">
          API Key
        </label>

        <input
          type="password"
          value="sk-proj-****************"
          readOnly
          className="w-full rounded-xl border border-gray-200 px-4 py-3"
        />

      </div>

    </section>
  );
}

export default AIProvider;