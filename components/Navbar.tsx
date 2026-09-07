import Link from "next/link";

export default function Navbar() {
  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-white"
        >
          NEXA<span className="text-violet-400">.</span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="#services"
            className="text-sm text-white/70 transition hover:text-white"
          >
            Services
          </Link>

          <Link
            href="#work"
            className="text-sm text-white/70 transition hover:text-white"
          >
            Work
          </Link>

          <Link
            href="#contact"
            className="text-sm text-white/70 transition hover:text-white"
          >
            Contact
          </Link>
        </div>

        {/* CTA */}
        <Link
          href="#contact"
          className="rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white hover:text-black"
        >
          Let's Talk
        </Link>

      </nav>
    </header>
  );
}