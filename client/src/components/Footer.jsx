function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#eef3ff] py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
        {/* Left */}

        <div className="flex flex-col items-center gap-2 md:items-start">
          <h2 className="text-lg font-bold text-gray-900">
            RepoPilot
          </h2>

          <p className="text-sm text-gray-500">
            © 2026 RepoPilot. Built for developers.
          </p>
        </div>

        {/* Right */}

        <div className="flex flex-wrap items-center justify-center gap-8">
          <a
            href="#"
            className="text-sm text-gray-500 transition hover:text-black"
          >
            Privacy Policy
          </a>

          <a
            href="#"
            className="text-sm text-gray-500 transition hover:text-black"
          >
            Terms of Service
          </a>

          <a
            href="#"
            className="text-sm text-gray-500 transition hover:text-black"
          >
            Security
          </a>

          <a
            href="#"
            className="text-sm text-gray-500 transition hover:text-black"
          >
            Status
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;