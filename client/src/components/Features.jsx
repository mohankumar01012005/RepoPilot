import {
  Bot,
  // Github,
  BellRing,
  Sparkles,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const features = [
  {
    icon: <Workflow  size={28} />,
    title: "GitHub Integration",
    description:
      "Connect your repositories securely using GitHub OAuth and automate workflows instantly.",
  },
  {
    icon: <Workflow size={28} />,
    title: "Event Driven",
    description:
      "Automatically react to Issues, Pull Requests and Push events in real time.",
  },
  {
    icon: <BellRing size={28} />,
    title: "Slack Notifications",
    description:
      "Receive instant notifications whenever RepoPilot performs an automation.",
  },
  {
    icon: <Bot size={28} />,
    title: "AI Automation",
    description:
      "Automatically summarize issues, classify priorities and prepare intelligent responses.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Secure Webhooks",
    description:
      "Webhook secret verification, replay protection and duplicate event prevention.",
  },
  {
    icon: <Sparkles size={28} />,
    title: "Beautiful Dashboard",
    description:
      "Monitor repositories, automations and activities from one modern dashboard.",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="bg-[#f9f9ff] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="mb-4 text-blue-600 font-semibold uppercase tracking-widest">
            FEATURES
          </p>

          <h2 className="text-5xl font-black text-gray-900">
            Everything You Need
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            RepoPilot simplifies GitHub automation with
            intelligent workflows, AI assistance and
            seamless notifications.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="
              rounded-3xl
              border
              border-gray-200
              bg-white
              p-8
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-xl
              "
            >

              <div
                className="
                mb-6
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-black
                text-white
                "
              >
                {feature.icon}
              </div>

              <h3 className="mb-4 text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="leading-8 text-gray-600">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;