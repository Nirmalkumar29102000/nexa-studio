export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#08080c] px-6 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">NEXA.</p>
          <p className="mt-1 text-sm text-white/40">
            Digital experiences, built with purpose.
          </p>
        </div>

        <div className="flex gap-6 text-sm text-white/50">
          <a href="#services" className="transition hover:text-white">
            Services
          </a>
          <a href="#work" className="transition hover:text-white">
            Work
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>

        <p className="text-sm text-white/30">
          © {new Date().getFullYear()} Nexa Studio
        </p>
      </div>
    </footer>
  );
}