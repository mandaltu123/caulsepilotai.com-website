export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between text-slate-400">
        <div>
          <p className="text-white font-space">CausePilot AI</p>
          <p className="text-sm">AI Infrastructure for Enterprise Knowledge</p>
          <p className="text-sm mt-2">contact@causepilotai.com</p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com"
            aria-label="LinkedIn"
            className="p-2 rounded-full border border-white/10 hover:border-cyanGlow/50 transition"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-slate-300"
              aria-hidden="true"
            >
              <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-2 7.5h4v10h-4V11Zm7 0h3.8v1.4h.05c.53-1 1.83-2.05 3.75-2.05 4 0 4.75 2.6 4.75 6v4.65h-4V17.2c0-1.7-.03-3.85-2.4-3.85-2.4 0-2.77 1.85-2.77 3.75v4.9h-4V11Z" />
            </svg>
          </a>
          <a
            href="https://github.com"
            aria-label="GitHub"
            className="p-2 rounded-full border border-white/10 hover:border-cyanGlow/50 transition"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-slate-300"
              aria-hidden="true"
            >
              <path d="M12 2C6.47 2 2 6.48 2 12.02c0 4.42 2.87 8.18 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.86-.01-1.7-2.78.61-3.37-1.34-3.37-1.34-.46-1.17-1.12-1.48-1.12-1.48-.91-.63.07-.62.07-.62 1 .08 1.53 1.04 1.53 1.04.9 1.55 2.36 1.1 2.94.84.09-.66.35-1.1.63-1.35-2.22-.25-4.56-1.12-4.56-5 0-1.1.39-2 1.03-2.7-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.4 9.4 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.56 1.38.21 2.4.1 2.65.64.7 1.03 1.6 1.03 2.7 0 3.9-2.35 4.74-4.58 4.98.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10 10 0 0 0 22 12.02C22 6.48 17.52 2 12 2Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
