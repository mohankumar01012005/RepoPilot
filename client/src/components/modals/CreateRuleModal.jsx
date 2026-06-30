import { useState } from "react";

import {
  X,
  Plus,
  Tag,
  MessageSquare,
  Bell,
  CheckCircle2,
} from "lucide-react";

import ConditionRow from "./ConditionRow";

function CreateRuleModal({
  open,
  onClose,
}) {
  const [conditions, setConditions] =
    useState([
      {
        id: 1,
        value: "bug",
      },
    ]);

  const [trigger, setTrigger] =
    useState("Issue Opened");

  const addCondition = () => {
    setConditions([
      ...conditions,
      {
        id: Date.now(),
        value: "",
      },
    ]);
  };

  const deleteCondition = (id) => {
    setConditions(
      conditions.filter(
        (c) => c.id !== id
      )
    );
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/50 backdrop-blur-sm p-5">

      <div className="max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-gray-200 p-7">

          <div className="flex items-center gap-3">

            <Plus size={26} />

            <div>

              <h2 className="text-3xl font-black">
                Create Rule
              </h2>

              <p className="mt-1 text-gray-500">
                Configure a new GitHub automation.
              </p>

            </div>

          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-gray-100"
          >
            <X size={22} />
          </button>

        </div>

        {/* Body */}

        <div className="max-h-[65vh] space-y-8 overflow-y-auto p-7">

          {/* Name */}

          <div>

            <label className="mb-2 block font-semibold">
              Rule Name
            </label>

            <input
              placeholder="Auto Label Bugs"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
            />

          </div>

          {/* Trigger */}

          <div>

            <label className="mb-2 block font-semibold">
              Trigger
            </label>

            <select
              value={trigger}
              onChange={(e) =>
                setTrigger(e.target.value)
              }
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none"
            >
              <option>
                Issue Opened
              </option>

              <option>
                Pull Request Opened
              </option>

              <option>
                Push Event
              </option>

              <option>
                Release Published
              </option>

            </select>

          </div>

          {/* Conditions */}

          <div>

            <div className="mb-4 flex items-center justify-between">

              <label className="font-semibold">
                Conditions
              </label>

              <button
                onClick={addCondition}
                className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 hover:bg-gray-100"
              >
                <Plus size={16} />

                Add

              </button>

            </div>

            <div className="space-y-3">

              {conditions.map(
                (condition) => (
                  <ConditionRow
                    key={condition.id}
                    condition={
                      condition
                    }
                    onDelete={() =>
                      deleteCondition(
                        condition.id
                      )
                    }
                  />
                )
              )}

            </div>

          </div>

          {/* Actions */}

          <div>

            <label className="mb-4 block font-semibold">
              Actions
            </label>

            <div className="grid gap-4 md:grid-cols-3">

              <button className="rounded-xl border border-gray-200 p-6 transition hover:border-black hover:bg-gray-50">

                <Tag
                  size={28}
                  className="mx-auto"
                />

                <p className="mt-3 font-semibold">
                  Add Label
                </p>

              </button>

              <button className="rounded-xl border border-gray-200 p-6 transition hover:border-black hover:bg-gray-50">

                <MessageSquare
                  size={28}
                  className="mx-auto"
                />

                <p className="mt-3 font-semibold">
                  Add Comment
                </p>

              </button>

              <button className="rounded-xl border border-gray-200 p-6 transition hover:border-black hover:bg-gray-50">

                <Bell
                  size={28}
                  className="mx-auto"
                />

                <p className="mt-3 font-semibold">
                  Slack Notify
                </p>

              </button>

            </div>

          </div>

        </div>

        {/* Footer */}

        <div className="flex items-center justify-between border-t border-gray-200 bg-gray-50 px-7 py-5">

          <div className="flex items-center gap-2 text-sm text-gray-500">

            <CheckCircle2
              size={18}
            />

            Ready to create.

          </div>

          <div className="flex gap-3">

            <button
              onClick={onClose}
              className="rounded-xl border border-gray-300 px-6 py-2 font-semibold"
            >
              Cancel
            </button>

            <button className="rounded-xl bg-black px-6 py-2 font-semibold text-white">

              Save Rule

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default CreateRuleModal;