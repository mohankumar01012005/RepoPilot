import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

import GitHubIntegration from "../components/settings/GitHubIntegration";
import SlackSettings from "../components/settings/SlackSettings";
import AIProvider from "../components/settings/AIProvider";
import SecuritySettings from "../components/settings/SecuritySettings";

function Settings() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">

      <Sidebar />

      <Topbar />

      <main className="md:ml-64">

        <div className="mx-auto max-w-5xl px-8 py-8">

          <div className="mb-8">

            <h1 className="text-4xl font-black">
              Settings
            </h1>

            <p className="mt-2 text-gray-500">
              Manage integrations, notifications and security settings.
            </p>

          </div>

          <div className="space-y-8">

            <GitHubIntegration />

            <SlackSettings />

            <AIProvider />

            <SecuritySettings />

          </div>

        </div>

      </main>

    </div>
  );
}

export default Settings;