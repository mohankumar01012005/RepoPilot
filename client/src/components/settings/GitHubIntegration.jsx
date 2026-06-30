import {
  Workflow,
  CheckCircle2,
  
} from "lucide-react";

import {
  useCurrentUser,
} from "../../hooks/useAuth";

function GitHubIntegration() {
  const {
    data: user,
    isLoading,
  } = useCurrentUser();

  if (isLoading) return null;

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-5">

          <img
            src={user.avatarUrl}
            alt=""
            className="h-14 w-14 rounded-full"
          />

          <div>

            <h2 className="text-2xl font-bold">
              GitHub Integration
            </h2>

            <p className="mt-1 text-gray-500">
              @{user.username}
            </p>

            <p className="text-sm text-gray-400">
              {user.email}
            </p>

          </div>

        </div>

        <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">

          <CheckCircle2 size={16} />

          Connected

        </span>

      </div>

      <div className="mt-8 grid grid-cols-2 gap-6">

        <div className="rounded-xl bg-gray-50 p-5">

          <p className="text-sm text-gray-500">
            Connected Repositories
          </p>

          <h2 className="mt-2 text-3xl font-black">
            {user.repositories}
          </h2>

        </div>

        <div className="rounded-xl bg-gray-50 p-5">

          <p className="text-sm text-gray-500">
            GitHub Username
          </p>

          <h2 className="mt-2 text-xl font-bold">
            {user.username}
          </h2>

        </div>

      </div>

    </section>
  );
}

export default GitHubIntegration;