import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden bg-[#f9f9ff]">

      {/* Background Blur */}

      <div className="absolute left-1/2 top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-200/40 blur-[150px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pb-24 pt-24 text-center">

        {/* Badge */}

        <div
          className="
          mb-8
          flex
          items-center
          gap-2
          rounded-full
          border
          border-gray-200
          bg-white
          px-4
          py-2
          text-sm
          font-medium
          text-gray-700
          shadow-sm
          "
        >
          ✨ AI Powered GitHub Automation
        </div>

        {/* Heading */}

        <h1
          className="
          max-w-5xl
          text-5xl
          font-black
          leading-tight
          tracking-tight
          text-gray-900
          md:text-7xl
          "
        >
          Automate GitHub
          <br />

          Workflows with

          <span className="block italic text-black">
            Intelligent Bots.
          </span>
        </h1>

        {/* Description */}

        <p
          className="
          mt-8
          max-w-3xl
          text-lg
          leading-8
          text-gray-600
          "
        >
          RepoPilot automatically reacts to GitHub events,
          labels issues, comments on pull requests,
          sends Slack notifications and helps engineering
          teams automate repetitive workflows using intelligent
          automation.
        </p>

        {/* Buttons */}

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">

          <button
          
            className="
            rounded-xl
            bg-black
            px-7
            py-4
            text-lg
            font-semibold
            text-white
            transition
            hover:-translate-y-1
            hover:bg-gray-900
            "

            onClick={() => navigate("/dashboard")}
          >
            Sign in with GitHub
          </button>

          <a
            href="#documentation"
            className="
            rounded-xl
            border
            border-gray-300
            bg-white
            px-7
            py-4
            text-lg
            font-semibold
            text-gray-900
            transition
            hover:bg-gray-100
            "
          >
            View Documentation
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;